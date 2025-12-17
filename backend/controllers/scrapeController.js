import { performScrape } from '../middleware/scraper.js';
import Scrape from '../models/Scrape.js';

export const handleManualScrape = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) return res.status(400).json({ message: "URL is required" });

        const data = await performScrape(url);
        const newEntry = await Scrape.create(data);
        
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};