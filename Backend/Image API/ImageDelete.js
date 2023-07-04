const connect = require('./ImageConnect')

connect.deleteMany().then(res=> {
    console.log("Successfully deleting all");
});