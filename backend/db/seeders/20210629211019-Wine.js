
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wines', [
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
        { name: , location: , price: 1, img_url: , wine_type: , grape: , region: , vintage: , createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Wines', null, {});
  }
};
