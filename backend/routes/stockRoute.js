const express = require('express');
const controller = require('../controllers/stockController');
const router = express.Router();

router.get('/get-stock',controller.getStockController);
router.post('/add-stock',controller.addStockController);
router.patch('/update-stock',controller.updateStockController);
router.delete('/delete-stock',controller.deleteStockController);
module.exports = router;