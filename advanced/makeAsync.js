//Write a function that will make any function now accept a callback and operate async

function makeAsync() {
  
}

const generateNumLessThanTen = () => {
  return Math.random() * 10;
};
//I am using bind to set the number to 10
module.exports.getNumLessThanTen = makeAsync(generateNumLessThan);







