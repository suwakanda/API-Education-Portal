const mongoose = require('mongoose');

const db = "mongodb+srv://yinqin:qwe123@cluster0.txbajo2.mongodb.net/yigiaowaligiao";

mongoose.connect(db).then(()=> {
    console.log("Connected to database");
})

.catch(()=> {
    console.log("Can't connect to database");
})

const blogSchema = new mongoose.Schema({
    ID: { type: String},
    Title: { type: String},
    URL: { type: String},
    Published: { type: String},
});

const connect = mongoose.model('Blog', blogSchema);

module.exports = connect;


const axios = require('axios');

const apikey = 'AIzaSyAmcKDolR253oqyL2zki4uNR-IyoxMsMC0';


const querystr = `https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=${apikey}`;


axios.get(querystr).then( (response) =>{
    ID = response.data.items[1].id;
    Title = response.data.items[1].title;
    URL = response.data.items[1].url;
    Published = response.data.items[1].published;

    blogValue = new connect ({
        ID:response.data.items[1].id,
        Title:response.data.items[1].title,
        URL:response.data.items[1].url,
        Published:response.data.items[1].published,
    });

    blogValue.save().then(result=> {
        console.log("Success" + result);
    })

    .catch(error=> {
        console.log("Error" + error);
    });
}
);