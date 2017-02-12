const { ObjectID } = require('mongodb');
const mongoClient = require('../helpers/MongoClientConnect');

function findStuffList (db, stuffIds, callback) {
  const stuffCollection = db.collection('stuffs');

  stuffCollection
        .find({ _id: { $in: stuffIds } })
        .toArray((error, stuffs) => {
          callback(error, stuffs);
        });
}

class InterestSSService {
  static findWishListByUserId (root, { userId, page, limit }) {
    return new Promise((resolve, reject) => {
      mongoClient.exec((db) => {
        const collection = db.collection('interests');
        const skip = page * limit;

        const skipPhrase = { $slice: [skip, limit] };

        collection.findOne({ user: userId }, { _id: 1, wishes: skipPhrase }, function (error, interest) {
            if (error || !interest) {
              reject(error);
            } else {
              const wishList = interest.wishes || [];
              const stuffIds =  wishList.map(wish => ObjectID(wish.stuff));

              findStuffList(db, stuffIds, (error, stuffs) => {
                  if (error) {
                    reject(error);
                  } else {
                    const wishListWithStuff = wishList.map((wish, index) => {
                      wish.stuff = stuffs[index];

                      return wish;
                    });

                    resolve(wishListWithStuff);
                  }

                  db.close();
              });
            }
        });
      });
    });
  }
}

module.exports = InterestSSService;