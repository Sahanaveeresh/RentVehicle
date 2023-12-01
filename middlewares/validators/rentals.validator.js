const Joi = require('joi');

exports.validateBook = (req, res, next) => {

    const validateSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        vehicleWheel: Joi.number().required(),
        vehicleType: Joi.number().required(),
        vehicleModel: Joi.number().required(),
        startDate: Joi.string().required(),
        endDate: Joi.string().required(),
    });

    const { error, value } = validateSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessage = error.details.map(err => err.message).join(', ');
        res.status(400).json({ error: errorMessage });
    } else {
        // Check if startDate is not greater than endDate
        const startDate = new Date(value.startDate);
        const endDate = new Date(value.endDate);

        if (startDate > endDate) {
            res.status(400).json({ error: 'Start date cannot be greater than end date' });
        } else {
            // Check if both dates are not less than today
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set hours to midnight for accurate comparison

            if (startDate < today || endDate < today) {
                res.status(400).json({ error: 'Both start date and end date must be equal to or later than today' });
            } else {
                console.log({ value });
                next();
            }
        }
    }
};
