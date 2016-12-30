const mongoose = require('mongoose');

class MongoConnect {

  constructor(host, port, db){
    this.host = host;
    this.port = port;
    this.db = db;
    this.url = `mongodb://${host}:${port}/${db}`;
  }

  connect() {
    return mongoose.connect(this.url);
  }
}



module.exports = new MongoConnect('localhost', 27017, 'shopspot');