const express = require('express');
const mongoose = require('mongoose');
const portfolioRoutes = require("./routes/portfolioRoute");
const authRoute =  require("./routes/authRoute");
const skillRoute = require("./routes/skillRoute");
const morgan = require('morgan');
const contactRoutes = require('./routes/contactRoutes');

require('dotenv').config();

const app = express();

require('./config/dbConfig');


app.use(express.json());
app.use(morgan('dev'));
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/auth", authRoute);
app.use("/api/skill", skillRoute);
app.use('/api/contact', contactRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
