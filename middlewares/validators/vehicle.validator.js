const Joi = require('joi');
 
exports.validateGetAllTypes = (req, res, next) => {
 
    const validateSchema = Joi.object({
        wheelId: Joi.number().required(),
    });
 
    const { error, value } = validateSchema.validate(req.query);
 
    if (error) {
        res.status(400).json('Invalid Request');
    } else {
        console.log({ value })
        next();
    }
};

exports.validateGetAllModels = (req, res, next) => {
 
    const validateSchema = Joi.object({
        typeId: Joi.number().required(),
    });
 
    const { error, value } = validateSchema.validate(req.query);
 
    if (error) {
        res.status(400).json('Invalid Request');
    } else {
        console.log({ value })
        next();
    }
};