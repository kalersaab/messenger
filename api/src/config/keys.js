require("dotenv").config();

module.exports = {
  host: {
    port: process.env.PORT || 3000,
    database: process.env.DATABASE,
  },
};
