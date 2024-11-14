const Contact = require("../models/Contact");

exports.contact = async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body; // Added mobile

    if (!name || !email || !mobile || !subject || !message) { // Added mobile
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }

    // Save contact data to MongoDB
    const contact = await Contact.create({
      name,
      email,
      mobile, // Added mobile
      subject,
      message,
    });

    return res.status(201).json({
      status: 201,
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
