
const mongoConnect = require('../helpers/MongoConnect');
const User = require('./User');

User.find({}, (err, user) => {
  console.log(err);
  console.log(User);
});