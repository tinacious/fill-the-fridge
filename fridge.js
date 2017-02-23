var tastyFoods = [ 'tacos', 'pizza', 'burgers', 'salad' ];
var healthyFoods = [ 'celery', 'carrots', 'kale', 'kohlrabi', 'brussels sprouts' ];

// See README for instructions

var fridge = document.getElementById('fridge');

function fillTheFridge(foodList) {  
  
  for (var i = 0; i < foodList.length; i++) {
  
    // Get the food item
    var foodItem = foodList[i];

    // Create the food item element
    var foodItemElement = document.createElement('div');

    // Put the food in the element, e.g. tupperware
    foodItemElement.innerText = foodItem;

    // Add the class for styling
    foodItemElement.classList.add('fridge__item');

    /// Add the tupperware of food to the fridge
    fridge.appendChild(foodItemElement);
  }
}


// Run it!
fillTheFridge(tastyFoods);


// Now try the bonus!

// var allTheFoods = healthyFoods.concat(tastyFoods);

// fillTheFridge(allTheFoods);
