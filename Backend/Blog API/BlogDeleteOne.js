const connect = require('./BlogConnect')

connect.deleteOne({Title:"Blogger"}).then(res=> {
    console.log("Successfully deleting one");
});