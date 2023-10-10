const { MongoClient } = require("mongodb");

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        console.log("Successfully connected to MongoDB.");
        _db = db.db();  // Update _db with the connected database object
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
