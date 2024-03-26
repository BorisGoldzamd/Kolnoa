const express = require('express');
const router = express.Router();
const SettingsController = require('../controllers/SettingsController');

// Rutas relacionadas con la configuración del usuario
router.put('/settings/profile', SettingsController.updateUserProfile);
router.put('/settings/password', SettingsController.changePassword);
router.delete('/settings/logout', SettingsController.logout);

module.exports = router;
