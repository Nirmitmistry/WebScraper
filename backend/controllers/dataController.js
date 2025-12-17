import Scrape from '../models/Scrape.js';
import { jsonToCsv } from '../middleware/csvcontroller.js';

export const getAllData = async (req, res) => {
    try {
        const { search } = req.query;
        const query = search ? { title: { $regex: search, $options: 'i' } } : {};
        const data = await Scrape.find(query).sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Fetch failed" });
    }
};

export const exportData = async (req, res) => {
    try {
        const data = await Scrape.find().lean();
        const csv = jsonToCsv(data);
        
        res.setHeader('Content-Type', 'text/csv');
        res.attachment('scraped_data.csv');
        res.status(200).send(csv);
    } catch (error) {
        res.status(500).json({ message: "Export failed" });
    }
};