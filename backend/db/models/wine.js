'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define('Wine', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    wine_type: DataTypes.STRING,
    grape: DataTypes.STRING,
    region: DataTypes.STRING,
    vintage: DataTypes.STRING
  }, {});
  Wine.associate = function(models) {
    Wine.hasMany(models.Review, { foreignKey: 'wineId' });
    Wine.hasMany(models.Wishlist, { foreignKey: 'wineId' })
  };
  return Wine;
};
