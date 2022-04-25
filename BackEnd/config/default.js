require("dotenv").config();
module.exports = {
  db: {
    con: { conString: process.env.MONGO_URI },
  },
};
