const express = require('express');
const controller = require('../controllers/salesController');
const router = express.Router();

router.get('/get-sales',controller.getSalesController);
router.post('/add-sales',controller.addSalesController);
router.patch('/update-sales',controller.updateSalesController);
router.delete('/delete-sales',controller.deleteSalesController);
router.delete('/delete-invoice',controller.deleteSalesController);
module.exports = router;