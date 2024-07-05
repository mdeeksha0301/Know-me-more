const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('error', ()=>{
    console.log('Error connectiong to database');
});

connection.on('connected', ()=>{
    console.log('Database connected');
});

module.exports = connection;