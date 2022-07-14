const rds = require("../service/repositories/rds");
module.exports.handler = async (req) => {

  const { 'request-type': reqType } = req.headers;
  const countFavorite = await rds.favoriteRepository.countFavorite(reqType);

  if (countFavorite < 5) {
    const favoriteRdsResponse = await rds.favoriteRepository.addFavorite(
      req.payload
    );
    return favoriteRdsResponse;
  } else {
    return "Maximum of 5 favorites per request type";
  }

  // const favoriteRdsResponse = await rds.favoriteRepository.addFavorite();

  // console.log(favoriteRdsResponse)
  // return favoriteRdsResponse
};
