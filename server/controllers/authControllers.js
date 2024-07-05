// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/adminUserModel'); // Assuming your user model is in a file called User.js

// const login = async (req, res) => {
//   // const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username : req.body.username, password : req.body.password });

//     if(user){
//       res.status(200).send({
//         data: user,
//         success: true,
//         message: "Login successfull"
//       });
//     }
//     else {
      
//     }
//     // if (!user) {
//     //   return res.status(401).json({ message: 'Invalid username or password' });
//     // }

//     // const isPasswordValid = await bcrypt.compare(password, user.password);
//     // if (!isPasswordValid) {
//     //   return res.status(401).json({ message: 'Invalid username or password' });
//     // }

//     // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     // res.json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// };

// module.exports = { login };

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/adminUserModel');

// const login = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ success: false, message: 'Invalid username or password' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ success: false, message: 'Invalid username or password' });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ success: true, message: 'Login successful', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ success: false, message: 'Server error' });
//   }
// };

// const register = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'Username already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({ username, password: hashedPassword });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ success: true, message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ success: false, message: 'Server error' });
//   }
// };

// module.exports = { login, register };

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/adminUserModel');

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Server error' });
  }
};

module.exports = { register, login };
