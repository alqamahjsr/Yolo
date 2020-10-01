/**
* @fileoverview mongoDB configuration
*/
const {MongoClient} = require('mongodb');
var mongoose = require("mongoose");
var chalk = require("chalk");
// const MONGOURL = "mongodb://127.0.0.1/poc";

// function Connection(){
//   mongoose.connect(MONGOURL,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   });
//   mongoose.connection.on("error", (err)=>{
//     console.log("%s Unable to connect to MongoDB", chalk.red("✗"));
//     process.exit();
//   });
// }

// module.exports = {
//   connect: Connection,
//   mongoUrl: MONGOURL
// }
const uri = "mongodb+srv://admin:admin@yolo-cluster.6igcm.mongodb.net/<dbname>?retryWrites=true&w=majority";

async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */


  const client = new MongoClient(uri,{useUnifiedTopology:true});

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      
      console.log('Mongo DB Connected.')
  } catch (e) {
      console.error(e.message);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

module.exports = {
  connect: main,
  mongoUrl: uri
  
}