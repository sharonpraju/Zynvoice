const express = require('express');
const controller = require('../controllers/dashboardController');
const router = express.Router();

router.get('/dasboard/total-sales',controller.dashboardTotalSalesController);
router.get('/dasboard/total-purchase',controller.dashboardTotalPurchaseController);
router.get('/dasboard/sales-today',controller.dashboardSalesTodayController);
router.get('/dasboard/purchase-today',controller.dashboardPurchaseTodayController);
router.get('/dasboard/weekly-sales',controller.dashboardWeeklySalesController);
router.get('/dasboard/weekly-purchase',controller.dashboardWeeklyPurchaseController);
router.get('/dasboard/low-quantity-items',controller.dashboardLowQuantityItemsController);
module.exports = router;