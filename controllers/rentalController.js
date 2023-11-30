const RentalService = require('../services/rentalService');

async function getAllRentals(req, res) {
  try {
    const rentals = await RentalService.getAllRentals();
    res.status(200).json(rentals);
  } catch (error) {
    console.error('Error fetching rentals:', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bookVehicle(req, res) {
  const { firstName, lastName, vehicleWheel, vehicleType, vehicleModel, startDate, endDate } = req.body;

  try {
    await RentalService.bookVehicle(firstName, lastName, vehicleWheel, vehicleType, vehicleModel, startDate, endDate);
    res.status(201).json({ message: 'Vehicle booked successfully' });
  } catch (error) {
    console.error('Error booking vehicle:', error.stack);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllRentals,
  bookVehicle
}
