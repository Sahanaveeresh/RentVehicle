const VehicleService = require('../services/vehicleService');

async function getAllWheels(req, res, next) {
    try {
        const wheels = await VehicleService.getAllWheels();
        res.status(200).json(wheels);
    } catch (error) {
        next(error);
    }
}

async function getAllTypesByWheelId(req, res, next) {
    try {
        const types = await VehicleService.getAllTypesByWheelId(req);
        res.status(200).json(types);
    } catch (error) {
        next(error);
    }
}

async function getAllModelsByTypeId(req, res, next) {
    try {
        const models = await VehicleService.getAllModelsByTypeId(req);
        res.status(200).json(models);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllWheels,
    getAllTypesByWheelId,
    getAllModelsByTypeId
};
