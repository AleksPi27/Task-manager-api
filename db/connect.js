const mongoose = require('mongoose');

const connectDB = (dbUrl) => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

// const schema = new mongoose.Schema({name: 'string'});

// console.log(schema);

// const Products = mongoose.model('Products', schema);

// console.log(Products);

// let obj = Products.find({name: "Top"}).exec((err, name) =>{
//     if (err) return handleError(err);
// });

// console.log(obj);

module.exports = connectDB;
