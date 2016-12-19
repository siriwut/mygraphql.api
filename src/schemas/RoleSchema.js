const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const RoleSchema = new Schema({
  name: String,
  perms: [Number]
});

module.exports = RoleSchema;
