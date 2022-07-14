const getFavoritesController = require('./get-favorites').handler;
const addFavoriteController = require('./add-favorite').handler
module.exports = {
    getFavoritesController,
    addFavoriteController
}
