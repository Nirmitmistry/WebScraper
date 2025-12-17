import express from 'express';
import { getAllData, exportData } from '../controllers/dataController.js';

const router = express.Router();
router.get('/', getAllData);
router.get('/export', exportData);

export default router;