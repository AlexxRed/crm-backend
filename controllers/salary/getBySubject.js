const { Salary } = require("../../models/Salary")

const getTeacher = async (req, res) => {
    const result = await Salary.find({subject})
    res.json(result)
}

module.exports = getTeacher;