const favorite = require('../handlers');

module.exports = {
    name: 'hello-world-plugin',
    register: async (server) => {

        server.route({
            method: 'GET',
            path: '/v1/customer/favorite',
            handler: favorite.getFavoritesController
        });

        server.route({
            method: 'POST',
            path: '/v1/customer/favorite',
            handler: favorite.addFavoriteController
        });
    },
};
