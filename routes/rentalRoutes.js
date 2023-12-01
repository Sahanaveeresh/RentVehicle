const express = require('express');
const router = express.Router();
const RentalController = require('../controllers/rentalController');
const dataValidators = require('../middlewares/validators');

router.get('/', RentalController.getAllRentals);
router.post('/book', dataValidators.validateBook, RentalController.bookVehicle);

module.exports = router;
