const FavoriteSchema = require("../../../models/favorite");
const rds = require("../../../models");

const logDetails = (method, type, details, stringify = true) => {
  const errDetails =
    details && details.toString().indexOf("Error:") >= 0 ? `${details} - ` : "";
  console[method]({
    type,
    information:
      !stringify || JSON.stringify(details) === "{}"
        ? details
        : `${errDetails}${JSON.stringify(details)}`,
  });
};

const getAllFavorites = async () => {
  try {
    const { Model } = rds.initializeDb();
    const result = await Model.findAll();
    return result;
  } catch (err) {
    logDetails("info", "FIND_FAVORITES_ERROR", err);
    throw { type: "OperationFailed" };
  }
};

const addFavorite = async (payload) => {
    try {
      const { Model } = rds.initializeDb();
      const result = await Model.create(payload);
      return result;
    } catch (err) {
      logDetails("info", "ADD_FAVORITE_ERROR", err);
      throw { type: "OperationFailed" };
    }
  };

const countFavorite = async (type) => {
    const { Model } = rds.initializeDb();
    const { count, rows } = await Model.findAndCountAll({
        where: {
          favorite_type: type
        }
      });
      console.log(count);
      return count
}

module.exports = { getAllFavorites, addFavorite, countFavorite };
