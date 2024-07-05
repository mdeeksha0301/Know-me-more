

// const express = require('express');
// const verifyToken = require('../middleware/verifyToken');
// const { login } = require('../controllers/authControllers');

// const router = express.Router();

// // Login route
// router.post('/login', login);

// // Example of a protected route
// router.get('/admin', verifyToken, (req, res) => {
//   res.send('Welcome to the admin page');
// });

// module.exports = router;

const express = require('express');
const { login, register } = require('../controllers/authControllers');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

// Registration route
router.post('/register', register);

// Login route
router.post('/login', login);

// Example of a protected route
router.get('/admin', verifyToken, (req, res) => {
  res.send('Welcome to the admin page');
});

module.exports = router;

