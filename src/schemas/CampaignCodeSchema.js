const { Schema } = require('mongoose');
const { Types: { ObjectId } } = Schema;

const CampaignCodeSchema = new Schema({
  rule: {
    amount: Number,
    minimumPrice: Number,
    maximumPrice: Number
  },
  name: String,
  code: String,
  type: String,
  startDate: Date,
  endDate: Date,
  used: Number,
  maxAvailable: Number,
  selfPickup: Boolean
});

module.exports = CampaignCodeSchema;
