/**
 * Carts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    products: {
      type: "json",
      columnType: "array",
      required: true,
    },
  },
};
