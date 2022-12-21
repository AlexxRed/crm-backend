const { Schema, model } = require("mongoose");

const salarySchema = new Schema(
    {
        subject: {
        type: String,
        },
        salary: {
            type: Array,
        },
    },
    { versionKey: false, timestamps: true },
);

const Salary = model('salary', salarySchema);

module.exports = Salary