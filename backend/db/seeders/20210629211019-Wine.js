
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wines', [
        { name: "Treana", location: "California", price: 24.92, img_url: "https://images.vivino.com/thumbs/sLZE9gvsTa2evWaSxzGa0Q_pb_x960.png", wine_type: "Red", grape: "Cabernet Sauvignon", region: "Central Coast", vintage: 2015, createdAt: new Date(), updatedAt: new Date()},
        { name: "Viña Alberdi Reserva", location: "Spain", price: 18.99, img_url: "https://images.vivino.com/thumbs/yraqVgZ6RNODE-_iyaFZ4Q_pb_x960.png", wine_type: "Red", grape: "Tempranillo", region: "Rioja", vintage: 2016, createdAt: new Date(), updatedAt: new Date()},
        { name: "Brauneberger Juffer Riesling Auslese", location: "Germany", price: 37.99, img_url: "https://images.vivino.com/thumbs/DVJ9q5zTQb-cKanECDAssQ_pb_x960.png", wine_type: "White wine", grape: "Riesling", region: "Brauneberg", vintage: 2018, createdAt: new Date(), updatedAt: new Date()},
        { name: "Joel Gott", location: "Oregon", price: 19.95, img_url: "https://images.vivino.com/thumbs/BgYEKWWUTuqMdv-m9uvrtQ_pb_x960.png", wine_type: "White", grape: "Pinot Noir", region: "Willamette Valley", vintage: "2018", createdAt: new Date(), updatedAt: new Date()},
        { name: "VIK", location: "Chile", price: 72.12, img_url: "https://images.vivino.com/thumbs/nkPhwXDDRA6HM38m2zQejg_pb_x960.png", wine_type: "Red", grape: "Chilean Bordeaux", region: "Colchagua Valley", vintage: 2013, createdAt: new Date(), updatedAt: new Date()},
        { name: "Alexandrie Brut N.V.", location: "California", price: 39.99, img_url: "https://images.vivino.com/thumbs/uc3qkd0HQHaTGIG7AJ1UPA_pb_x960.png", wine_type: "Sparkling", grape: "Chardonnay", region: "North Coast", vintage: 2015, createdAt: new Date(), updatedAt: new Date()},
        { name: "Vie di Romans", location: "Italy", price: 30.99, img_url: "https://images.vivino.com/thumbs/c0GvjTHITb-ouPSlKUpczA_pb_x960.png", wine_type: "White", grape: "Pinot Grigio", region: "Friuli Isonzo", vintage: 2014, createdAt: new Date(), updatedAt: new Date()},
        { name: "El Enemigo", location: "Argentina", price: 20.89, img_url: "https://images.vivino.com/thumbs/S0m-9WKZRfKqjuvZbpy8Vg_pb_x960.png", wine_type: "Red", grape: "Malbec", region: "Mendoza", vintage: "2017", createdAt: new Date(), updatedAt: new Date()},
        { name: "Calvey", location: "France", price: 79.55, img_url: "https://images.vivino.com/thumbs/Zo-oDMchSD-y8wZWlgWQ-w_pb_x960.png", wine_type: "Red", grape: "Bordeaux Merlot", region: "Bordeaux", vintage: 2015, createdAt: new Date(), updatedAt: new Date()},
        { name: "Pago de los Balagueses", location: "Spain", price: 32.99, img_url: "https://images.vivino.com/thumbs/UMsAR56SQnGqCi3A1bngGQ_pb_x960.png", wine_type: "Red", grape: "Syrah", region: "Vegalfaro", vintage: 2017, createdAt: new Date(), updatedAt: new Date()},
        { name: "Le Macioche", location: "Italy", price: 39.99, img_url: "https://images.vivino.com/thumbs/vtHvHwrSQwm0mo0ZS94Orw_pb_x960.png", wine_type: "Red", grape: "Sangiovese", region: "Brunello di Montalcino", vintage: 2019, createdAt: new Date(), updatedAt: new Date()},
        { name: "Dow's", location: "Portugal", price: 89.99, img_url: "https://images.vivino.com/thumbs/cn3BnyzeRbmnluOLoj756w_pb_x960.png", wine_type: "Red", grape: "Touriga Nacional", region: "Porto", vintage: 2016, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Wines', null, {});
  }
};
