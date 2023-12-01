const db = require('../config/db');

exports.getAllModelsByTypeId = async (req) => {
    const { typeId } = req.query;
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