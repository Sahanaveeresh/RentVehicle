const vehiclesWheelRepository = require('../repository/vehiclesWheelRepository');
const vehiclesTypeRepository = require('../repository/vehiclesTypeRepository');
const vehiclesModelRepository = require('../repository/vehiclesModelRepository');

async function getAllWheels() {
    try {
        const getAllWheels = await vehiclesWheelRepository.getAllWheels();
        return getAllWheels;
    } catch (error) {
        throw error;
    }
}

async function getAllTypesByWheelId(req) {
    try {
        const getAllTypesByWheelId = await vehiclesTypeRepository.getAllTypesByWheelId(req);
        return getAllTypesByWheelId;
    } catch (error) {
        throw error;
    }
}

async function getAllModelsByTypeId(req) {
    try {
        const getAllModelsByTypeId = await vehiclesModelRepository.getAllModelsByTypeId(req);
        return getAllModelsByTypeId;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllWheels,
    getAllTypesByWheelId,
    getAllModelsByTypeId
};