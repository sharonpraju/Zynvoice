const mongoose = require('mongoose');
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

function connect(){

    var options = {
      keepAlive: true,
      connectTimeoutMS: 30000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
      
    mongoose.connect(process.env.MONGODB_URI, options, (err) => {
      if (err)
      {
          console.log(err);
      }
      else
      {
          console.log("Connection Established");
      }
    });
}

function close(){
    mongoose.disconnect();
}

module.exports = {
    connect,
    close
};