// backend/middleware/scraper.js
import axios from 'axios';
import * as cheerio from 'cheerio';

export const performScrape = async (url) => {
    try {
        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $ = cheerio.load(data);
        const results = [];

        $('.product_pod').each((index, element) => {
            const title = $(element).find('h3 a').attr('title');
            const price = $(element).find('.price_color').text().trim();
            const link = $(element).find('h3 a').attr('href');

            results.push({
                title: title || 'No Title',
                price: price || 'N/A',
                url: new URL(link, url).href, 
                source: new URL(url).hostname,
                createdAt: new Date().toISOString()
            });
        });

        return results; 
    } catch (error) {
        throw new Error(`Scraper Error: ${error.message}`);
    }
};