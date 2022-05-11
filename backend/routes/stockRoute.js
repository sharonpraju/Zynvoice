const express = require('express');
const controller = require('../controllers/stockController');
const router = express.Router();

router.get('/stock/get',controller.getStockController);
router.post('/stock/add',controller.addStockController);
router.patch('/stock/update',controller.updateStockController);
router.delete('/stock/delete',controller.deleteStockController);
module.exports = router;