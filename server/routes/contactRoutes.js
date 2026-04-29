const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

/* ✅ TEST GET */
router.get("/", (req, res) => {
  res.json({ message: "Route Working" });
});

/* ✅ POST */
router.post("/", async (req, res) => {
  try {
    console.log("Received:", req.body);

    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(200).json({
      success: true,
      message: "Saved successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});

module.exports = router;