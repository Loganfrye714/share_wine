
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wines', [
        { name: "Treana", location: "California", price: 24.92, img_url: "https://images.vivino.com/thumbs/sLZE9gvsTa2evWaSxzGa0Q_pb_x960.png", wine_type: "Red", grape: "Cabernet Sauvignon", region: "Central Coast", vintage: 2015, createdAt: new Date(), updatedAt: new Date()},
        { name: "Viña Alberdi Reserva", location: "Spain", price: 18.99, img_url: "https://images.vivino.com/thumbs/yraqVgZ6RNODE-_iyaFZ4Q_pb_x960.png", wine_type: "Red", grape: "Tempranillo", region: "Rioja", vintage: 2016, createdAt: new Date(), updatedAt: new Date()},
        { name: "Brauneberger Juffer Riesling Auslese", location: "Germany", price: 37.99, img_url: "https://images.vivino.com/thumbs/DVJ9q5zTQb-cKanECDAssQ_pb_x960.png", wine_type: "White wine", grape: "Riesling", region: "Brauneberg", vintage: 2018, createdAt: new Date(), updatedAt: new Date()},
        { name: "Joel Gott", location: "Oregon", price: 19.95, img_url: "https://images.vivino.com/thumbs/BgYEKWWUTuqMdv-m9uvrtQ_pb_x960.png", wine_type: "White", grape: "Pinot Noir", region: "Willamette Valley", vintage: "2018", createdAt: new Date(), updatedAt: new Date()},
        { name: "VIK", location: "Chile", price: 72, img_url: "https://images.vivino.com/thumbs/nkPhwXDDRA6HM38m2zQejg_pb_x960.png", wine_type: "Red", grape: "Chilean Bordeaux", region: "Colchagua Valley", vintage: 2013, createdAt: new Date(), updatedAt: new Date()},
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
