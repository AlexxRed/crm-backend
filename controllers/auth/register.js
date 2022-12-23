const { User } = require("../../models/User")
const { createError } = require("../../services")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {SECRET_KEY} = process.env;


const register = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    if (user) {
        throw createError(409, 'Email is already in use')
    }
    const hashPassword = await bcrypt.hash(password, 15);
    const result = await User.create({ ...req.body, password: hashPassword });
    const createdUser = await User.findOne({ email });

    const payload = {
        id: createdUser._id
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
    
    const foundUser = await User.findByIdAndUpdate(createdUser._id,{token})

    res.status(201).json({
        name: foundUser.name,
        email: foundUser.email,
        token
    })
}


module.exports = register;
