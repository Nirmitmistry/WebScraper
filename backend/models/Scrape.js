import mongoose from 'mongoose';

const ScrapeddataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, default: "N/A" },
    url: {  type: String,  required: true },
    description: {  type: String},
    source: { type: String, default: "Web Scraper"},
    scrapedAt: { type: Date,  default: Date.now  }
});


const Scrapeddata = mongoose.model('Scrapeddata', ScrapeddataSchema);

export default Scrapeddata;