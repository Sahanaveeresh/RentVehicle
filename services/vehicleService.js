const db = require('../models/db');

exports.getAllWheels = async (req, res) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM vehicles_wheel`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

exports.getAllTypesByWheelId = async (req, res) => {
    const { wheelId } = req.body;
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM vehicles_type WHERE wheel = '${wheelId}'`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
  };

  exports.getAllModelsByTypeId = async (req, res) => {
    const { typeId } = req.body;
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM vehicles_model WHERE type = '${typeId}'`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
  };