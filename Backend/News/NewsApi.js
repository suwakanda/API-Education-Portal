const mongoose = require('mongoose');

const db = "mongodb+srv://yinqin:qwe123@cluster0.txbajo2.mongodb.net/yigiaowaligiao";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const newsSchema = new mongoose.Schema({
    Title: { type: String},
    Author: { type: String},
    Description: { type: String}
});

const connect = mongoose.model('news', newsSchema);

module.exports = connect;


const axios = require('axios');

const apikey = 'f35f6545abfa4b26985edc9788e2db79';
const news = 'education';

const querystr = `https://newsapi.org/v2/everything?q=${news}&apiKey=${apikey}`;


axios.get(querystr).then( (response) =>{
    Title = response.data.articles[0].title;
    Author = response.data.articles[0].author;
    Description = response.data.articles[0].description; 

    newsValue = new connect ({
        Title:response.data.articles[0].title,
        Author:response.data.articles[0].author,
        Description:response.data.articles[0].description
    });

    newsValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);
