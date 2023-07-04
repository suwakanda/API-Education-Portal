const connect =require('./NewsConnect')

connect.updateOne({Quote:"HAIL"}).then(res=> {
    console.log("Update quote successfully");
})