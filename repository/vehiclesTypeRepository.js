const db = require('../config/db');

exports.getAllTypesByWheelId = async (req) => {
    const { wheelId } = req.query;
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