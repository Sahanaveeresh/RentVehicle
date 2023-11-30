const express = require('express');
const router = express.Router();
const RentalController = require('../controllers/rentalController');

router.get('/', RentalController.getAllRentals);
router.post('/book', RentalController.bookVehicle);

module.exports = router;
