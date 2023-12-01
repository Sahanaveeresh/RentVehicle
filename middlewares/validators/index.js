const { validateGetAllTypes,  validateGetAllModels} = require('./vehicle.validator');
const { validateBook } = require('./rentals.validator');

module.exports = {
    validateGetAllTypes, validateGetAllModels,
    validateBook
}