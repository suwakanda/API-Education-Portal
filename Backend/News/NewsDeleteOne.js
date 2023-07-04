const connect =require('./NewsConnect')

connect.deleteOne({Author:"Christina Wyman"}).then(res=> {
    console.log("Successfully deleted one");
})