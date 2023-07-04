const connect = require('./BlogConnect')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
});