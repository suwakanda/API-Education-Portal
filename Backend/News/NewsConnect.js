const mongoose = require('mongoose');

const db = "mongodb+srv://yinqin:qwe123@cluster0.txbajo2.mongodb.net/yigiaowaligiao";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(() => {
    console.log("Unable to connect");
  })
  
  const newsSchema = new mongoose.Schema({
    Id: {type: String},
    Quote: {type: String}, 
  
  });
  
  const connect = mongoose.model('news', newsSchema);
  
  module.exports = connect;