const connect = require('./ImageConnect')

connect.deleteOne({Type:"photo"}).then(res=> {
    console.log("Successfully deleting one");
});