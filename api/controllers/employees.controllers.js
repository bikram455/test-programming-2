const mongoose = require("mongoose");
const Employee = mongoose.model(process.env.EMPLOYEEMODEL);

const getAll = function (req, res) {
    Employee.find().exec(function (err, employees) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: employees
        };
        if (err) {
            response.status= parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message= err;
        }
        res.status(response.status).json(response.message);
    });
}

const getOne = function (req, res) {
    const employeeId = req.params.employeeId;
    Employee.findById(employeeId).exec(function (err, employee) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: employee
        };
        if (err) {
            response.status = parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message = err;
        } else if (!employee) {
            response.status = parseInt(process.env.REST_API_RESOURCE_NOT_FOUND_ERROR, 10);
            response.message = {
                "message": process.env.REST_API_RESOURCE_NOT_FOUND_MESSAGE
            };
        }
        res.status(response.status).json(response.message);
    });
}

module.exports = {
    getAll: getAll,
    getOne: getOne
};