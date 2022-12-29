const peopleNames = require("../country/state/city/index");
const peopleFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return peopleFirstNames(peopleNames);
};
module.exports = getPeopleInCity;
