const db = require('../config/db');

exports.getAllWheels = async () => {
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