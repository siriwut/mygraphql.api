var util = require('util'),
    async = require('async');

var ObjectID = require('mongodb').ObjectID;

var StuffGetLimitInterestCommand = function (stuffId, withInterestDetail, userSessionId) {
  //Command.call(this);

  this.stuffId = stuffId;
  this.withInterestDetail = withInterestDetail;
  this.userSessionId = userSessionId;
}

//util.inherits(StuffGetLimitInterestCommand, Command);

StuffGetLimitInterestCommand.prototype.run = function(collection, callback) {
  callback = callback || function () {};

  var stuffId = new ObjectID(this.stuffId.toString());
  var userSessionId = this.userSessionId ? this.userSessionId.toString() : null;
  var withInterestDetail = this.withInterestDetail;

  var query = { _id: stuffId };
  var slicePart = {
    wishes: { $slice: -10 },
    likes: { $slice: -10 }
  }
  var interestDetail = {};

  var getLikeCountQuery = [ { $match: { _id: stuffId } },
                            { $unwind: '$likes' },
                            { $group: { _id: null, number: { $sum: 1 } } } ];
  var getLikeStatusQuery = { _id: stuffId,
                            likes: { $in: [userSessionId] } };
  var getWishCountQuery = [ { $match: { _id: stuffId } },
                            { $unwind: '$wishes' },
                            { $group: { _id: null, number: { $sum: 1 } } } ];
  var getWishStatusQuery = { _id: stuffId,
                            wishes: { $in: [userSessionId] } };

  async.waterfall([
    function getStuff (next) {
      collection.find(query, slicePart)
                .limit(1)
                .toArray(function (findError, stuffs) {
                  next(findError, stuffs);
                });
    },
    function getInterestDetail (stuffs, next) {
      var stuff = stuffs.length !== 0 ? stuffs[0] : null;

      if (withInterestDetail && stuff) {
        async.parallel([
          function getLikeCount (subNext) {
            collection.aggregate(getLikeCountQuery, {}, function (error, count) {
              interestDetail.likeCount = count.length !== 0 ? count[0].number : 0;
              subNext(error);
            });
          },
          function getLikeStatus (subNext) {
            if (!userSessionId) {
              interestDetail.likeStatus = false;
              subNext();
            }
            else {
              collection.count(getLikeStatusQuery, function (error, count) {
                interestDetail.likeStatus = count !== 0;
                subNext(error);
              });
            }
          },
          function getwishCount (subNext) {
            collection.aggregate(getWishCountQuery, {}, function (error, count) {
              interestDetail.wishCount = count.length !== 0 ? count[0].number : 0;
              subNext(error);
            });
          },
          function getWishStatus (subNext) {
            if (!userSessionId) {
              interestDetail.wishStatus = false;
              subNext();
            }
            else {
              collection.count(getWishStatusQuery, function (error, count) {
                interestDetail.wishStatus = count !== 0;
                subNext(error);
              });
            }
          }
        ], function done (error) {
          if (error) {
            next(error);
          }
          else {
            stuff.likeCount = interestDetail.likeCount;
            stuff.likeStatus = interestDetail.likeStatus;
            stuff.wishCount = interestDetail.wishCount;
            stuff.wishStatus = interestDetail.wishStatus;

            next(null, stuff);
          }
        });
      }
      else {
        next(null, stuff);
      }
    }
  ], function done (mainError, stuff) {
    callback(mainError, stuff);
  });
};

exports.StuffGetLimitInterestCommand = StuffGetLimitInterestCommand;
