function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' || '));
}

var ingredientString = '3 eggs, dash of milk, salt and pepper to taste, Butter for pan';

var comma = ',';

splitString(ingredientString, comma);
