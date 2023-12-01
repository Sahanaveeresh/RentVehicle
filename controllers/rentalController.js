const RentalService = require('../services/rentalService');

async function getAllRentals(req, res, next) {
  try {
    const rentals = await RentalService.getAllRentals();
    res.status(200).json(rentals);
  } catch (error) {
    next(error);
  }
}

async function bookVehicle(req, res, next) {
  try {
    await RentalService.bookVehicle(req);
    res.status(201).json({ message: 'Vehicle booked successfully' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllRentals,
  bookVehicle
}
