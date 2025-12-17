import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; 

import scrapeRouter from './routes/scrape.js';
import dataRouter from './routes/data.js';
import { initCronJobs } from './middleware/cron.js';

dotenv.config();

const app = express();

await connectDB();

initCronJobs();


app.use(express.json());


app.get('/', (req, res) => res.send("Scraper Server is running"));
app.use('/api/scrape', scrapeRouter);
app.use('/api/data', dataRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port: ${PORT}`));