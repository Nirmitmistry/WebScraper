import cron from 'node-cron';
import { performScrape } from './scraper.js';

export const initCronJobs = () => {
    cron.schedule('0 0 * * *', async () => {
        console.log('Running daily automated scrape...');
    
    });
};