import axios from 'axios';
import * as cheerio from 'cheerio';

export const performScrape = async (url) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(data);
        return {
            title: $('h1').first().text().trim() || $('title').text().trim(),
            price: $('.price, #price, [class*="price"]').first().text().trim() || 'N/A',
            url: url,
            source: new URL(url).hostname
        };
    } catch (error) {
        throw new Error(`Scrape Failed: ${error.message}`);
    }
};