const mongoose = require("mongoose");

// const url = 'mongodb+srv://upload:Ijxl0EyJlUor7arc@cluster0.0ynjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const url = 'mongodb+srv://newApp:ol33n6YD9WGWLIPS@cluster0.0ynjx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// const InitiateMongoServer = async () => {
//     try {
//        mongoose.connect(url, {
//         useNewUrlParser: true
//       });
//       console.log("Connected to DB !");
//     } catch (e) {
//       console.log(e);
//       throw e;
//     }
//   };
// module.exports=InitiateMongoServer;

const mongoString =
  "mongodb+srv://yinqin:qwe123@cluster0.txbajo2.mongodb.net/yigiaowaligiao";

mongoose.connect(mongoString, { useNewUrlParser: true });

const InitiateMongoServer = async () => {
  mongoose.connection.on("error", function (error) {
    console.log(error);
  });

  mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.");
  });
};
module.exports = InitiateMongoServer;
