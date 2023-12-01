const rentalsRepository = require('../repository/rentalsRepository');

async function getAllRentals() {
    try {
        const getAllRentals = await rentalsRepository.getAllRentals();
        return getAllRentals;
    } catch (error) {
        throw error;
    }
}

async function bookVehicle(req) {
  try {
      const checkVehicleAvailability = await rentalsRepository.checkVehicleAvailability(req);
      if(checkVehicleAvailability.length > 0){
        throw { statusCode: 400, message: 'Vehicle not available for the selected dates'};
      }
      const bookVehicle = await rentalsRepository.bookVehicle(req);
      return bookVehicle;
  } catch (error) {
      throw error;
  }
}

module.exports = {
  getAllRentals,
  bookVehicle
};
