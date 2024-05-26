const express = require("express");
const router = express.Router();
const UserSchema = require("../Models/User");
const bcrypt = require("bcrypt");
//Register user
router.put("/signup", async (req, res) => {
  try {
    const { username, email, merchantId, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hashSync(password, salt);
    const newUser = new UserSchema({
      username,
      email,
      merchantId,
      password: hashPassword,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json("Wrong credentials");
    }

    const info = {
      id: user._id,
      email: user.email,
    };

    res.status(200).json(info);
  } catch (error) {
    console.error("Error during login process:", error); // Log the error for debugging
    res.status(500).json({ error: error.message }); // Return error message in response
  }
});

module.exports = router;
