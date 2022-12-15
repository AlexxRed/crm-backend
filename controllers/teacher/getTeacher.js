const { Teacher } = require("../../models/Teacher")

const getTeacher = async (req, res) => {
    const result = await Teacher.find({})
    res.json(result)
}

module.exports = getTeacher