const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');

router.get('/getAllWheels', VehicleController.getAllWheels);
router.get('/getAllTypes', VehicleController.getAllTypesByWheelId);
router.get('/getAllModels', VehicleController.getAllModelsByTypeId);

module.exports = router;
