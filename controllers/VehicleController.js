const VehicleService = require('../services/vehicleService');

async function getAllWheels(req, res) {
    try {
        const wheels = await VehicleService.getAllWheels();
        res.status(200).json(wheels);
    } catch (error) {
        console.error('Error fetching wheels:', error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllTypesByWheelId(req, res) {
    try {
        const types = await VehicleService.getAllTypesByWheelId();
        res.status(200).json(types);
    } catch (error) {
        console.error('Error fetching types:', error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllModelsByTypeId(req, res) {
    try {
        const models = await VehicleService.getAllModelsByTypeId();
        res.status(200).json(models);
    } catch (error) {
        console.error('Error fetching models:', error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAllWheels,
    getAllTypesByWheelId,
    getAllModelsByTypeId
};
