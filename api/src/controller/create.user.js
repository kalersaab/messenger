const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");

const CreateUser = async function (req, res) {
  try {
    const data = req.body;
    const { name, email, password } = data;

    // random 10 digits create
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    const UserData = await UserModel.create({
      name,
      email,
      password: hashPassword,
    });
    const { password: omit, ...responseData } = UserData._doc;

    res.status(201).send({
      message: "User created successfully",
      data: responseData,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = CreateUser;
