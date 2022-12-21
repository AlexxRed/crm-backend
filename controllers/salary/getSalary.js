const { Salary } = require("../../models/Salary")

const getTeacher = async (req, res) => {
    const result = await Salary.find({})
    res.json(result)
}

module.exports = getTeacher;