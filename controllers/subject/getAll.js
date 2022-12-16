const  Subject  = require("../../models/Subject");


const getAll = async (req, res, next) => {
        const result = await Subject.find({});
        console.log("result",result)
        res.json(result)
}

module.exports = getAll