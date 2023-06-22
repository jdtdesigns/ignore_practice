

function printName(str) {
  console.log(str);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = {
  printName: printName,
  capitalize: capitalize
};