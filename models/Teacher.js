const { Schema, model } = require("mongoose");
const Joi = require("joi");

const teacherSchema = Schema(
    {
        name: {
        type: String,
        required: [true, "name is required"],
        },
        totalScore: {
        type: Number,
        required: [true, "totalScore is required"],
        }
    },
    { versionKey: false, timestamps: true }
    );

const Teacher = model("player", teacherSchema);


const joiTeacherShema = Joi.object({
    name: Joi.string(),
    totalScore: Joi.number(),
});

module.exports = {
    Teacher,
    joiTeacherShema
};