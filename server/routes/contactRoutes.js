// routes/contactRoutes.js

const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactControllers');

router.post('/send-email', sendContactEmail);

module.exports = router;
