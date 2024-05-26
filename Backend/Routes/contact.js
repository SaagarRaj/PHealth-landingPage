const express = require("express");
const router = express.Router();
const ContactUsSchema = require("../Models/ContactUs");

//Get Details
router.put("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new ContactUsSchema({
      name,
      email,
      message,
    });
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
