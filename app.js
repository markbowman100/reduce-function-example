const arr = [
  {
    name: 'steve'
  },
  {
    name: 'steve'
  }
]
var map = {};
var result = [];
arr.reduce((accumulator, currentValue, currentIndex, originalArray) => {
  //Check if name exists already and only add if it doesn't
  if(map[currentValue.name] === undefined) {
    //Declare that the name has been added
    map[currentValue.name] = true;
    //Add a deep copy of the object
    accumulator.push(JSON.parse(JSON.stringify(currentValue)));
  }
}, result);
