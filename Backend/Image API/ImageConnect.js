const mongoose = require('mongoose');

const db = "mongodb+srv://yinqin:qwe123@cluster0.txbajo2.mongodb.net/yigiaowaligiao";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const imageSchema = new mongoose.Schema({
    ID: { type: String},
    Type: { type: String},
    Tags: { type: String},
    PageURL: { type: String},
    Views: { type: String},
});

const connect = mongoose.model('image', imageSchema);

module.exports = connect;