const { Teacher } = require("../../models/Teacher")

const addTeacher = async (req, res) => {
    const result = await Teacher.create({ ...req.body});
    res.status(201).json(result);
};

module.exports = addTeacher;