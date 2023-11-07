const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model");
const loginUser = async function (req, res) {
  try {
    const data = req.body;

    const { email, password } = data;

    if (!email) {
      res.status(400).send({ message: "please provide email" });
    }

    if (!password) {
      res.status(400).send({ message: "please provide a password" });
    }

    const checkEmail = await UserModel.findOne({ email: email });
    if (!checkEmail) {
      res
        .status(404)
        .send({ message: "email doesn't exist, please login again" });
    }

    console.log("checkEmail", checkEmail._id);

    const checkPassword = await bcrypt.compare(password, checkEmail.password);
    if (!checkPassword) {
      res.status(400).send({ message: "wrong password please try again" });
    }

    const token = jwt.sign(
      {
        customerId: checkEmail._id,
      },
      "Secrete_Key",
      { expiresIn: "1h" }
    );

    res.send({ message: "login successful", data: token });
  } catch (error) {
    console.log(error);
  }
};
module.exports = loginUser;
