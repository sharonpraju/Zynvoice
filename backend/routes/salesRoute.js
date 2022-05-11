const express = require('express');
const controller = require('../controllers/salesController');
const router = express.Router();

router.get('/sales/get',controller.getSalesController);
router.post('/sales/add',controller.addSalesController);
router.patch('/sales/update',controller.updateSalesController);
router.delete('/sales/delete',controller.deleteSalesController);
router.delete('/sales/invoice/delete',controller.deleteSalesController);
module.exports = router;