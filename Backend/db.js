 const mongoose = require('mongoose');

 const mongoURI = "mongodb://127.0.0.1:27017/inotebook"
//  const dbOptions = {useNewUrlParser: true, useUnifiedTopology: true};


 const connectToMongo = async () => {
    try {
      const conn = await mongoose.connect(mongoURI)
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } 
    catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
  
//   module.exports = connectDB

 module.exports = connectToMongo;