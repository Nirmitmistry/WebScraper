import express from 'express';
import { performScrape } from '../middleware/scraper.js';
import Scrape from '../models/Scrape.js';
import { jsonToCsv } from '../middleware/csvcontroller.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) return res.status(400).json({ message: "URL is required" });

        const data = await performScrape(url);
        const newEntry = await Scrape.create(data);
        
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/data', async (req, res) => {
    try {
        const items = await Scrape.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

router.get('/export', async (req, res) => {
    try {
        const data = await Scrape.find().lean();
        const csv = jsonToCsv(data);
        
        res.setHeader('Content-Type', 'text/csv');
        res.attachment('scraped_data.csv');
        res.status(200).send(csv);
    } catch (error) {
        res.status(500).json({ message: "Export failed" });
    }
});

export default router;