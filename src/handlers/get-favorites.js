const rds = require('../service/repositories/rds')
module.exports.handler = async (req) => {
    const favoriteRdsResponse = await rds.favoriteRepository.getAllFavorites();

    console.log(favoriteRdsResponse)
    return favoriteRdsResponse
};
