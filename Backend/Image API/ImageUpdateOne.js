const connect = require('./ImageConnect')

connect.updateOne({Type:"photo"}, {Type:"jpg"}).then(res=> {
    console.log("Successfully update");
});