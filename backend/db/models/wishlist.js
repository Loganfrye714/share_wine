'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    userId: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER
  }, {});
  Wishlist.associate = function(models) {
    Wishlist.belongsTo(models.Wine, { foreignKey: 'wineId' });
    Wishlist.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Wishlist;
};
