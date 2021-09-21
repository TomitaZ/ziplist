const testArrayLetters = ['a', 'b', 'c'];
const testArrayNum = [1, 2, 3];

function zipList(arrayOne, arrayTwo) {
  const zipArray = [];
  for (let i = 0; i < arrayOne.length; i++) {
    zipArray.push(arrayOne[i]);
    zipArray.push(arrayTwo[i]);
  }
  return zipArray;
}

function zipListTheSimpleWay(arrayOne, arrayTwo) {
  return _.flatten(_.zip(arrayOne, arrayTwo));
}

console.log(zipList(testArrayLetters, testArrayNum));
console.log(zipListTheSimpleWay(testArrayLetters, testArrayNum));
