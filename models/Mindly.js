const { DataTypes } = require("sequelize");

const db = require("../db/conn");

//User
const User = require("./User");

const Mindly = db.define("Mindly", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

Mindly.belongsTo(User);
User.hasMany(Mindly);

module.exports = Mindly;
