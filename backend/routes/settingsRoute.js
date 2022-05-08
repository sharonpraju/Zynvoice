const express = require('express');
const controller = require('../controllers/settingsController');
const router = express.Router();

router.get('/settings/general/get-details',controller.getGeneralSettingsController);
router.patch('/settings/general/update-details',controller.updateGeneralSettingsController);
router.get('/settings/user/get-users',controller.getUsersSettingsController);
router.post('/settings/user/add-user',controller.addUserSettingsController);
router.delete('/settings/user/remove-user',controller.removeUserSettingsController);
router.patch('/settings/security/change-password',controller.passwordSettingsController);
router.get('/settings/backup',controller.backupSettingsController);
router.post('/settings/restore',controller.restoreSettingsController);
module.exports = router;