const connect = require('./BlogConnect')

connect.updateOne({ID:"7345193987064476834"}, {ID:"9999999999999999999"}).then(res=> {
    console.log("Successfully update");
});