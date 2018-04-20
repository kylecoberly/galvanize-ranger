/* Get the data at `https://fetch-data-e2f88.firebaseapp.com/name.json` and return the second and third indexes of `associateInstructors`) */
const fetch = require("node-fetch")

module.exports = function(){
  return fetch("https://fetch-data-e2f88.firebaseapp.com/name.json")
  .then(response => response.json())
  .then(response => {
    return response.minions.leadInstructors[2]
  })
}
