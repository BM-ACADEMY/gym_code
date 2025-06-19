const express = require("express");
const router = express.Router();
const transporter = require("../config/transporter");
const getOwnerEmailTemplate = require("../emailTemplates/ownerEmailTemplate");
const getUserEmailTemplate = require("../emailTemplates/userEmailTemplate");
const getEnquiryOwnerEmailTemplate = require("../emailTemplates/enquiryOwnerEmailTemplate");
const getEnquiryUserEmailTemplate = require("../emailTemplates/enquiryUserEmailTemplate");

router.get("/", (req, res) => {
  res.send("Welcome to our gym api");
});

// Franchise form endpoint
router.post("/send-franchise-email", async (req, res) => {
  try {
    const { name, email, phone, details } = req.body;

    if (!name || !email || !details) {
      return res.status(400).json({ message: "Name, email, and details are required!" });
    }

    // Admin email
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Franchise Inquiry",
      html: getOwnerEmailTemplate(name, email, phone, details),
    };

    // User confirmation email
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Franchise Inquiry",
      html: getUserEmailTemplate(name, details),
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Franchise inquiry sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "Failed to send franchise inquiry.", error: error.message });
  }
});

// Enquiry form endpoint
router.post("/send-enquiry-email", async (req, res) => {
  try {
    const { name, email, phone, details } = req.body;

    if (!name || !email || !details) {
      return res.status(400).json({ message: "Name, email, and details are required!" });
    }

    // Admin email
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Gym Enquiry",
      html: getEnquiryOwnerEmailTemplate(name, email, phone, details),
    };

    // User confirmation email
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Gym Enquiry",
      html: getEnquiryUserEmailTemplate(name),
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: "Enquiry sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "Failed to send enquiry.", error: error.message });
  }
});

module.exports = router;