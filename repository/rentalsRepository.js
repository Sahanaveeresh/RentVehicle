const db = require('../config/db');

exports.getAllRentals = async () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM rentals`, (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});
};

exports.checkVehicleAvailability = async (req) => {
    const { vehicleWheel, vehicleType, vehicleModel, startDate, endDate } = req.body;
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM rentals WHERE vehicle_wheel = '${vehicleWheel}' AND vehicle_type = '${vehicleType}' AND vehicle_model = '${vehicleModel}' AND (start_date = '${startDate}' OR end_date = '${endDate}')`, (err, results) => {
          if (err) {
              reject(err);
          } else {
              resolve(results);
          }
      });
  });
  };

exports.bookVehicle = async (req, res) => {
  const { firstName, lastName, vehicleWheel, vehicleType, vehicleModel, startDate, endDate } = req.body;
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO rentals (first_name, last_name, vehicle_wheel, vehicle_type, vehicle_model, start_date, end_date) VALUES ('${firstName}', '${lastName}', '${vehicleWheel}', '${vehicleType}', '${vehicleModel}', '${startDate}', '${endDate}')`, (err, results) => {
        if (err) {
            reject(err);
        } else {
          resolve(results);
        }
    });
});
};
