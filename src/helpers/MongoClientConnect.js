const { MongoClient } = require('mongodb');

class MongoClientConnect {
  constructor(host, port, db){
    this.host = host;
    this.port = port;
    this.db = db;
    this.url = `mongodb://${host}:${port}/${db}`;
  }

  exec(fn) {
    MongoClient.connect(this.url, (err, db) => {
      if (err) {
        throw new Error(err.message);
      }

      fn(db);
      //db.close();
    });
  }
}



module.exports = new MongoClientConnect('localhost', 27017, 'shopspot');