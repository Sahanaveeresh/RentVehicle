const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/VehicleController');
const dataValidators = require('../middlewares/validators');

router.get('/getAllWheels', VehicleController.getAllWheels);
router.get('/getAllTypes', dataValidators.validateGetAllTypes, VehicleController.getAllTypesByWheelId);
router.get('/getAllModels', dataValidators.validateGetAllModels, VehicleController.getAllModelsByTypeId);

module.exports = router;
