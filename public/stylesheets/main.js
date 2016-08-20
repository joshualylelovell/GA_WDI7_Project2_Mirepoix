function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' || '));
}

var ingredientString = '3 eggs, dash of milk, salt and pepper to taste, butter for pan';

var comma = ',';

splitString(ingredientString, comma);

//one idea for appending to an <ul>

var indexNum = 0;
var unorderedList = document.getElementById('itemList');
var ingredients = new Array("3 eggs", "dash of milk", "salt and pepper to taste", "butter for the pan");
var myElement;

function writeIngredients(){

  for (var i = 0; i < ingredients.length; i++ ) {
        // Create the <LI> element
        myElement = document.createElement("LI");
        // Add the letter between the <LI> tags
        myElement.innerHTML = ingredients[indexNum++];
        // Append the <LI> to the bottom of the <UL> element
        unorderedList.appendChild(myElement);
        }
    }

 writeIngredients();

 //second idea:

 var ingredients = new Array("2-3 eggs", "dash of milk", "salt and pepper to taste", "butter for the pan");

 function writeIngredients(){
     var items = document.getElementById("itemList");

     for (var i = 0; i < ingredients.length; i++ ) {
         var item = document.createElement("li");
         item.innerHTML = ingredients[i];
         items.appendChild(item);
     }

 }

 writeIngredients();
