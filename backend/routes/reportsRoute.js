const express = require('express');
const controller = require('../controllers/reportsController');
const router = express.Router();

router.get('/report/sales/get',controller.getSalesReportController);
router.get('/report/purchase/get',controller.getPurchaseReportController);
router.post('/report/purchase/add',controller.addPurchaseReportController);
module.exports = router;