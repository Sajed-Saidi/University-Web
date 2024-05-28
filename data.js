let data = [
  {
    restaurant: "Chipotle",
    foodItems: [
      {
        foodName: "Chicken Burrito",
        foodType: "Burrito",
        protein: "chicken",
        calories: 975,
      },
      {
        foodName: "Steak Burrito",
        foodType: "Burrito",
        protein: "steak",
        calories: 945,
      },
      {
        foodName: "Carnitas Burrito",
        foodType: "Burrito",
        protein: "carnitas",
        calories: 1005,
      },
      {
        foodName: "Barbacoa Burrito",
        foodType: "Burrito",
        protein: "barbacoa",
        calories: 965,
      },
      {
        foodName: "Chorizo Burrito",
        foodType: "Burrito",
        protein: "chorizo",
        calories: 1095,
      },
      {
        foodName: "Sofritas Burrito",
        foodType: "Burrito",
        protein: "sofritas",
        calories: 945,
      },
      {
        foodName: "Chicken Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 630,
      },
      { foodName: "Chicken Bowl", calories: 630 },
      {
        foodName: "Steak Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 600,
      },
      {
        foodName: "Carnitas Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 660,
      },
      { foodName: "Carnitas Bowl", calories: 660 },
      {
        foodName: "Barbacoa Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 620,
      },
      { foodName: "Barbacoa Bowl", calories: 620 },
      {
        foodName: "Chorizo Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 750,
      },
      { foodName: "Chorizo Bowl", calories: 750 },
      {
        foodName: "Sofritas Burrito Bowl",
        foodType: "Burrito Bowl",
        calories: 600,
      },
      { foodName: "Sofritas Bowl", calories: 600 },
      {
        foodName: "Chicken Corn Tortilla Taco",
        foodType: "Taco",
        protein: "chicken",
        calories: 650,
      },
      {
        foodName: "Chicken Flour Tortilla Taco",
        foodType: "Taco",
        protein: "chicken",
        calories: 700,
      },
    ],
  },
  {
    restaurant: "Panera",
    foodItems: [
      {
        foodName: "BBQ Chicken Flatbread",
        foodType: "Sandwich",
        calories: 380,
        carbs: 41,
      },
      {
        foodName: "Chicken Flatbread",
        calories: 380,
        correctedTerm: "BBQ Chicken Flatbread",
        carbs: 41,
      },
      { foodName: "Tomato Mozzarella Flatbread", calories: 350, carbs: 35 },
      {
        foodName: "Roasted Turkey Cranberry Flatbread",
        calories: 310,
        carbs: 36,
      },
      { foodName: "Turkey Cranberry Flatbread", calories: 310, carbs: 36 },
      {
        foodName: "Half Size Italian on Hoagie Roll",
        calories: 440,
        carbs: 38,
      },
      {
        foodName: "Half Italian",
        calories: 440,
        correctedTerm: "Half Size Italian on Hoagie Roll",
        carbs: 38,
      },
      {
        foodName: "Italian",
        calories: 880,
        correctedTerm: "Italian on Hoagie Roll",
        carbs: 75,
      },
      { foodName: "Italian on Hoagie Roll", calories: 880, carbs: 75 },
      { foodName: "Steak and White Cheddar Panini", calories: 940, carbs: 79 },
      {
        foodName: "Steak and Cheddar Panini",
        foodType: "Sandwich",
        calories: 940,
        carbs: 79,
      },
      {
        foodName: "Steak Panini",
        calories: 940,
        correctedTerm: "Steak & White Cheddar Panini on Hoagie Roll",
        carbs: 79,
      },
      {
        foodName: "Steak & White Cheddar Panini on Hoagie Roll",
        calories: 940,
        carbs: 79,
      },
      {
        foodName: "Half Steak Panini",
        calories: 470,
        correctedTerm: "Half Size Steak & White Cheddar Panini on Hoagie Roll",
        carbs: 40,
      },
      {
        foodName: "Half Size Steak & White Cheddar Panini on Hoagie Roll",
        calories: 470,
        carbs: 40,
      },
      {
        foodName: "Chicken Panini",
        calories: 750,
        correctedTerm: "Frontega Chicken Panini on Focaccia",
        carbs: 85,
      },
      {
        foodName: "Half Chicken Panini",
        calories: 380,
        correctedTerm: "Half Size Chicken Panini",
        carbs: 42,
      },
      { foodName: "Half Size Chicken Panini", calories: 380, carbs: 42 },
      {
        foodName: "Frontega Chicken Panini on Focaccia",
        calories: 750,
        carbs: 85,
      },
      {
        foodName: "Half Turkey Sandwich",
        calories: 280,
        correctedTerm: "Half Size Turkey Breast Sandwich",
        carbs: 32,
      },
    ],
  },
  {
    restaurant: "Burger King",
    foodItems: [
      { foodName: "Whopper", foodType: "Burger", calories: 660 },
      { foodName: "Whooper", calories: 660, correctedTerm: "Whopper" },
      { foodName: "Whopper Sandwich", calories: 660, correctedTerm: "Whopper" },
      { foodName: "Whopper with Cheese", calories: 740 },
      { foodName: "Whooper with Cheese", calories: 740 },
      { foodName: "Bacon and Cheese Whopper", calories: 790 },
      { foodName: "Bacon Double Cheeseburger", calories: 370 },
      {
        foodName: "Double Bacon Burger",
        calories: 370,
        correctedTerm: "Bacon Double Cheeseburger",
      },
      { foodName: "Double Whopper", foodType: "Burger", calories: 900 },
      { foodName: "Double Whopper with Cheese", calories: 980 },
      { foodName: "Triple Whopper", calories: 1130 },
      { foodName: "Triple Whopper with Cheese", calories: 1210 },
      { foodName: "Bacon King", calories: 1150 },
      {
        foodName: "Double Whopper Bacon King",
        calories: 1150,
        correctedTerm: "Bacon King",
      },
      { foodName: "Farmhouse King", calories: 1220 },
      { foodName: "Farmhouse", calories: 1220 },
      { foodName: "Rodeo King", calories: 1250 },
      { foodName: "Rodeo Burger", calories: 1250 },
      { foodName: "Big King", calories: 530 },
      {
        foodName: "Junior Whopper",
        calories: 310,
        correctedTerm: "Whopper Jr",
      },
    ],
  },
  {
    restaurant: "Subway",
    foodItems: [
      {
        foodName: "Black Forest Ham",
        calories: 290,
        correctedTerm: "6 inch Black Forest Ham",
      },
      {
        foodName: "Black Forrest Ham",
        calories: 290,
        correctedTerm: "6 inch Black Forest Ham",
      },
      { foodName: "Six inch Black Forest Ham", calories: 290 },
      {
        foodName: "6 inch Black Forest Ham",
        foodType: "Six inch",
        calories: 290,
      },
      { foodName: "12 inch Black Forest Ham", calories: 580 },
      {
        foodName: "Footlong Black Forest Ham",
        foodType: "Footlong",
        calories: 580,
      },
      { foodName: "Oven Roasted Chicken", calories: 320 },
      {
        foodName: "6 inch Oven Roasted Chicken",
        foodType: "Six inch",
        calories: 320,
      },
      { foodName: "Six inch Oven Roasted Chicken", calories: 320 },
      { foodName: "12 inch Oven Roasted Chicken", calories: 640 },
      {
        foodName: "Footlong Oven Roasted Chicken",
        foodType: "Footlong",
        calories: 640,
      },
      { foodName: "6 inch Roast Beef", foodType: "Six inch", calories: 320 },
      { foodName: "Six inch Roast Beef", calories: 320 },
      { foodName: "12 inch Roast Beef", calories: 640 },
      { foodName: "Footlong Roast Beef", foodType: "Footlong", calories: 640 },
      { foodName: "Rotisserie-Style Chicken", calories: 350 },
      { foodName: "Roasted Chicken", calories: 350 },
      { foodName: "Rotisserie Chicken", foodType: "Chicken", calories: 350 },
      {
        foodName: "6 inch Rotisserie Chicken",
        foodType: "Six inch",
        calories: 350,
      },
      { foodName: "Six inch Rotisserie Chicken", calories: 350 },
    ],
  },
  {
    restaurant: "Chick-fil-A",
    foodItems: [
      { foodName: "Chicken Sandwich", foodType: "Chicken", calories: 440 },
      { foodName: "Chicken Deluxe Sandwich", calories: 500 },
      { foodName: "Chicken Deluxe", foodType: "Chicken", calories: 500 },
      { foodName: "Spicy Chicken Deluxe Sandwich", calories: 570 },
      { foodName: "Spicy Chicken Deluxe", foodType: "Chicken", calories: 570 },
      { foodName: "Spicy Deluxe", calories: 570 },
      { foodName: "Spicy Deluxe Sandwich", calories: 570 },
      { foodName: "Spicy Deluxe Chicken Sandwich", calories: 570 },
      {
        foodName: "Chicken Salad Sandwich",
        foodType: "Chicken",
        calories: 500,
      },
      { foodName: "Spicy Chicken Sandwich", calories: 490 },
      { foodName: "Spicy Chicken", foodType: "Chicken", calories: 490 },
      { foodName: "Grilled Chicken Sandwich", calories: 320 },
      { foodName: "Grilled Chicken", foodType: "Chicken", calories: 320 },
      { foodName: "Four count Chicken Strips", calories: 470 },
      { foodName: "4 count Chicken Strips", calories: 470 },
      { foodName: "Chick-n-Strips 4 count", calories: 470 },
      { foodName: "Chick-n-Strips four count", calories: 470 },
      { foodName: "Three count Chicken Strips", calories: 360 },
      { foodName: "3 count Chicken Strips", calories: 360 },
      { foodName: "Chick-n-Strips 3 count", calories: 360 },
    ],
  },
  {
    restaurant: "McDonalds",
    foodItems: [
      { foodName: "Big Mac", foodType: "Burger", calories: 540 },
      { foodName: "Big Macs", calories: 540, correctedTerm: "Big Mac" },
      { foodName: "BigMac", calories: 540, correctedTerm: "Big Mac" },
      { foodName: "BigMc", calories: 540, correctedTerm: "Big Mac" },
      { foodName: "2 Big Macs", calories: 1080 },
      {
        foodName: "Quarter Pounder",
        foodType: "Burger",
        calories: 540,
        correctedTerm: "Quarter Pounder with Cheese",
      },
      {
        foodName: "Quarter Pounder Burger",
        calories: 540,
        correctedTerm: "Quarter Pounder with Cheese",
      },
      { foodName: "Quarter Pounder with Cheese", calories: 540 },
      { foodName: "Quarter Pound with Cheese", calories: 540 },
      { foodName: "Quarter Pounder Deluxe", calories: 600 },
      { foodName: "Mushroom & Swiss Quarter Pounder", calories: 590 },
      {
        foodName: "Mushroom & Swiss Burger",
        calories: 590,
        correctedTerm: "Mushroom & Swiss Quarter Pounder",
      },
      { foodName: "Grand Mac", calories: 860 },
      { foodName: "Hamburger", calories: 250 },
      { foodName: "Cheeseburger", calories: 300 },
      {
        foodName: "Cheese Burger",
        calories: 300,
        correctedTerm: "Cheeseburger",
      },
      { foodName: "2 Cheeseburgers", calories: 600 },
      {
        foodName: "2 Cheese burgers",
        calories: 600,
        correctedTerm: "2 Cheeseburgers",
      },
      { foodName: "McDouble", calories: 380 },
      { foodName: "Bacon McDouble", calories: 450 },
    ],
  },
  {
    restaurant: "Wendys",
    foodItems: [
      { foodName: "Single", foodType: "Burger", calories: 550 },
      { foodName: "Double", foodType: "Burger", calories: 790 },
      { foodName: "Triple", calories: 1070 },
      {
        foodName: "Daves Single",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      { foodName: "Dave's Single", calories: 550 },
      { foodName: "Dave’s Single", calories: 550 },
      {
        foodName: "Daves Burger",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      {
        foodName: "Dave's Burger",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      {
        foodName: "Dave’s Burger",
        calories: 550,
        correctedTerm: "Dave's Single",
      },
      { foodName: "Daves Double", calories: 790 },
      { foodName: "Dave's Double", calories: 790 },
      { foodName: "Dave’s Double", calories: 790 },
      { foodName: "Daves Triple", calories: 1070 },
      { foodName: "Dave's Triple", calories: 1070 },
      { foodName: "Dave’s Triple", calories: 1070 },
      { foodName: "Son of Baconator", calories: 610 },
      { foodName: "Baconator", foodType: "Burger", calories: 930 },
      { foodName: "Homestyle Asiago Ranch Chicken Club", calories: 650 },
      { foodName: "Spicy Asiago Ranch Chicken Club", calories: 640 },
      {
        foodName: "Grilled Asiago Ranch Chicken Club",
        foodType: "Chicken",
        calories: 500,
      },
    ],
  },
  {
    restaurant: "Taco Bell",
    foodItems: [
      { foodName: "7 Layer Burrito", foodType: "Burrito", calories: 440 },
      { foodName: "Seven Layer Burrito", calories: 440 },
      { foodName: "7 Layer", calories: 440 },
      { foodName: "Seven Layer", calories: 440 },
      { foodName: "Bean Burrito", calories: 380 },
      { foodName: "5 layer burrito", calories: 500 },
      { foodName: "Beefy 5 Layer Burrito", foodType: "Burrito", calories: 500 },
      { foodName: "Beefy five layer burrito", calories: 500 },
      { foodName: "Beefy Fritos Burrito", calories: 440 },
      { foodName: "Beefy Frito Burrito", calories: 440 },
      { foodName: "Beefy Nacho Loader Griller", calories: 370 },
      { foodName: "Black Bean Burrito", calories: 390 },
      { foodName: "Beef Burrito Supreme", calories: 410 },
      {
        foodName: "Chicken Burrito Supreme",
        protein: "chicken",
        foodType: "Burrito",
        calories: 380,
      },
      { foodName: "Steak Burrito Supreme", protein: "steak", calories: 390 },
      { foodName: "Cheesy Bean and Rice Burrito", calories: 430 },
      { foodName: "Chili Cheese Burrito", foodType: "Burrito", calories: 370 },
      { foodName: "Cheesy Potato Burrito", calories: 490 },
      { foodName: "Potato Burrito", calories: 490 },
      { foodName: "Chipotle Chicken Loaded Griller", calories: 340 },
    ],
  },
  {
    restaurant: "Arbys",
    foodItems: [
      { foodName: "Classic Roast Beef", calories: 360, foodType: "Roast Beef" },
      { foodName: "Roast Beef Classic", calories: 360 },
      { foodName: "Double Roast Beef", calories: 510, foodType: "Roast Beef" },
      {
        foodName: "Half Pound Roast Beef",
        calories: 610,
        foodType: "Roast Beef",
      },
      { foodName: "Classic Beef and Cheddar", calories: 450 },
      {
        foodName: "Classic Beef n Cheddar",
        calories: 450,
        correctedTerm: "Classic Beef and Cheddar",
      },
      {
        foodName: "Beef and Cheddar",
        calories: 450,
        correctedTerm: "Classic Beef and Cheddar",
        foodType: "Roast Beef",
      },
      {
        foodName: "Beef n Cheddar",
        calories: 450,
        correctedTerm: "Classic Beef and Cheddar",
      },
      { foodName: "Mid Beef and Cheddar", calories: 450 },
      {
        foodName: "Double Beef and Cheddar",
        calories: 630,
        foodType: "Roast Beef",
      },
      {
        foodName: "Half Pound Beef and Cheddar",
        calories: 740,
        foodType: "Roast Beef",
      },
      { foodName: "Classic French Dip and Swiss", calories: 540 },
      { foodName: "French Dip and Swiss", calories: 540 },
      { foodName: "French Dip", calories: 540, foodType: "Roast Beef" },
      {
        foodName: "Half Pound French Dip and Swiss",
        calories: 750,
        foodType: "Roast Beef",
      },
      {
        foodName: "Half Pound French Dip",
        calories: 750,
        correctedTerm: "Half Pound French Dip and Swiss",
      },
      { foodName: "Three Cheese Steak", calories: 650 },
      { foodName: "Fire Roasted Philly", calories: 640 },
      { foodName: "Philly Cheese Steak", calories: 640 },
      { foodName: "Grand Turkey Club", foodType: "Turkey", calories: 480 },
    ],
  },
  {
    restaurant: "Hardees",
    foodItems: [
      { foodName: "Made from Scratch Biscuit", calories: 430 },
      { foodName: "Grass-Fed All-Natural Burger", calories: 780 },
      { foodName: "Thick Burger", calories: 780 },
      { foodName: "Thickburger", foodType: "Burger", calories: 780 },
      { foodName: "Original Thickburger", calories: 780 },
      {
        foodName: "Veggie",
        calories: 550,
        correctedTerm: "Veggie Thickburger",
      },
      { foodName: "Veggie Thickburger", foodType: "Burger", calories: 550 },
      { foodName: "Veg It", calories: 550 },
      { foodName: "Cheeseburger", calories: 640 },
      { foodName: "Mushroom & Swiss Thickburger", calories: 680 },
      {
        foodName: "Bacon Cheese Thickburger",
        foodType: "Burger",
        calories: 850,
      },
      { foodName: "Frisco Thickburger", foodType: "Burger", calories: 840 },
      { foodName: "Frisco Burger", calories: 840 },
      { foodName: "Double Thickburger", calories: 1130 },
      { foodName: "Monster Thickburger", calories: 1300 },
      {
        foodName: "Monster Burger",
        calories: 1300,
        correctedTerm: "Monster Thickburger",
      },
      { foodName: "Quarter Pound Thickburger", calories: 530 },
      { foodName: "Quarter Pound Cheeseburger", calories: 440 },
      { foodName: "Charbroiled Chicken Club Sandwich", calories: 560 },
      { foodName: "Charbroiled BBQ Chicken Sandwich", calories: 350 },
    ],
  },
  {
    restaurant: "Five Guys",
    foodItems: [
      { foodName: "Hamburger", foodType: "Burger", calories: 700 },
      { foodName: "Cheeseburger", foodType: "Burger", calories: 840 },
      { foodName: "Bacon Burger", foodType: "Burger", calories: 780 },
      { foodName: "Bacon Cheeseburger", foodType: "Burger", calories: 920 },
      { foodName: "Bacon Cheeseburger all the way", calories: 970 },
      { foodName: "Little Hamburger", foodType: "Burger", calories: 480 },
      {
        foodName: "Little Burger",
        calories: 480,
        correctedTerm: "Little Hamburger",
      },
      { foodName: "Little Cheeseburger", foodType: "Burger", calories: 550 },
      { foodName: "Little Bacon Burger", foodType: "Burger", calories: 560 },
      {
        foodName: "Little Bacon Cheeseburger",
        foodType: "Burger",
        calories: 630,
      },
      { foodName: "Hot Dog", foodType: "Hot Dogs", calories: 545 },
      { foodName: "HotDog", calories: 545 },
      { foodName: "Cheese Dog", foodType: "Hot Dogs", calories: 615 },
      { foodName: "Bacon Dog", foodType: "Hot Dogs", calories: 625 },
      { foodName: "Bacon Cheese Dog", foodType: "Hot Dogs", calories: 695 },
      { foodName: "Veggie Sandwich", foodType: "Sandwich", calories: 545 },
      {
        foodName: "Cheese Veggie Sandwich",
        foodType: "Sandwich",
        calories: 510,
      },
      { foodName: "Grilled Cheese", foodType: "Sandwich", calories: 470 },
      { foodName: "BLT", foodType: "Sandwich", calories: 533 },
      {
        foodName: "Little French Fries",
        calories: 526,
        sideItem: true,
        ketchupItem: true,
      },
    ],
  },
  {
    restaurant: "Sonic",
    foodItems: [
      { foodName: "Hatch Green Chile Cheeseburger", calories: 730 },
      { foodName: "Jalapeno Burger", foodType: "Burger", calories: 660 },
      { foodName: "Jalapeno Cheeseburger", calories: 730 },
      { foodName: "Jr. Burger", foodType: "Burger", calories: 320 },
      { foodName: "Jr. Deluxe Burger", foodType: "Burger", calories: 340 },
      { foodName: "Jr. Deluxe Cheeseburger", calories: 410 },
      { foodName: "Jr. Double Cheeseburger", calories: 560 },
      {
        foodName: "Bacon Cheeseburger with Mayo",
        foodType: "Burger",
        calories: 870,
      },
      { foodName: "Burger with Ketchup", foodType: "Burger", calories: 680 },
      { foodName: "Burger with Mustard", calories: 670 },
      {
        foodName: "Cheese burger",
        calories: 730,
        correctedTerm: "Cheeseburger",
      },
      { foodName: "Cheeseburger with Ketchup", calories: 750 },
      { foodName: "Cheeseburger with Mayo", calories: 780 },
      { foodName: "Cheeseburger with Mustard", calories: 730 },
      { foodName: "Cheeseburger", foodType: "Burger", calories: 730 },
      { foodName: "Bacon Double Cheeseburger with Mayo", calories: 1280 },
      {
        foodName: "Double Cheeseburger with Ketchup",
        foodType: "Burger",
        calories: 1160,
      },
      { foodName: "Double Cheeseburger with Mayo", calories: 1280 },
      {
        foodName: "Double Cheese burger",
        calories: 1160,
        correctedTerm: "Double Cheeseburger with Ketchup",
      },
      { foodName: "Jalapeno Double Cheeseburger with Mustard", calories: 1140 },
    ],
  },
  {
    restaurant: "Panda Express",
    foodItems: [
      {
        foodName: "Orange Chicken",
        foodType: "Entree",
        calories: 380,
        carbs: 44,
        sodium: 610,
      },
      {
        foodName: "Double Orange Chicken",
        calories: 760,
        carbs: 88,
        sodium: 1220,
      },
      {
        foodName: "String Bean Chicken Breast",
        foodType: "Entree",
        calories: 190,
        carbs: 13,
        sodium: 590,
      },
      {
        foodName: "Chicken and Green Beans",
        calories: 190,
        carbs: 13,
        sodium: 590,
        correctedTerm: "String Bean Chicken Breast",
      },
      {
        foodName: "Sweet Fire Chicken Breast",
        calories: 380,
        carbs: 47,
        sodium: 320,
      },
      {
        foodName: "Sweet Fire Chicken",
        foodType: "Entree",
        calories: 380,
        carbs: 47,
        sodium: 320,
        correctedTerm: "Sweet Fire Chicken Breast",
      },
      {
        foodName: "Kung Pao Chicken",
        foodType: "Entree",
        calories: 290,
        carbs: 14,
        sodium: 970,
      },
      {
        foodName: "Mushroom Chicken",
        foodType: "Entree",
        calories: 220,
        carbs: 11,
        sodium: 840,
      },
      {
        foodName: "Black Pepper Chicken",
        foodType: "Entree",
        calories: 280,
        carbs: 15,
        sodium: 1130,
      },
      {
        foodName: "Black Peper Chicken",
        calories: 280,
        carbs: 15,
        sodium: 1130,
        correctedTerm: "Black Pepper Chicken",
      },
      {
        foodName: "Grilled Teriyaki Chicken",
        calories: 300,
        carbs: 8,
        sodium: 530,
      },
      {
        foodName: "Teriyaki Chicken",
        foodType: "Entree",
        calories: 300,
        carbs: 8,
        sodium: 530,
      },
      {
        foodName: "Broccoli Beef",
        foodType: "Entree",
        calories: 150,
        carbs: 13,
        sodium: 520,
      },
      { foodName: "Beef Broccoli", calories: 150, carbs: 13, sodium: 520 },
      {
        foodName: "Shanghai Angus Steak",
        foodType: "Entree",
        calories: 310,
        carbs: 16,
        sodium: 830,
      },
      {
        foodName: "Beijing Beef",
        foodType: "Entree",
        calories: 470,
        carbs: 46,
        sodium: 660,
      },
      {
        foodName: "Honey Walnut Shrimp",
        foodType: "Entree",
        calories: 360,
        carbs: 35,
        sodium: 440,
      },
      {
        foodName: "Walnut Shrimp",
        calories: 360,
        carbs: 35,
        sodium: 440,
        correctedTerm: "Honey Walnut Shrimp",
      },
      {
        foodName: "Eggplant Tofu",
        foodType: "Entree",
        calories: 340,
        carbs: 23,
        sodium: 520,
      },
      {
        foodName: "Chow Mein",
        foodType: "Sides",
        calories: 510,
        carbs: 80,
        sodium: 860,
      },
    ],
  },
  {
    restaurant: "Cookout",
    foodItems: [
      { foodName: "Small Hamburger", foodType: "Burger", calories: 226 },
      { foodName: "Regular Hamburger", foodType: "Burger", calories: 325 },
      {
        foodName: "Hamburger",
        calories: 325,
        correctedTerm: "Regular Hamburger",
      },
      { foodName: "Huge Hamburger", foodType: "Burger", calories: 510 },
      { foodName: "Big Double", foodType: "Burger", calories: 311 },
      { foodName: "Chicken Breast", foodType: "Chicken", calories: 377 },
      {
        foodName: "Original Style Chicken Breast",
        foodType: "Chicken",
        calories: 393,
      },
      {
        foodName: "Barbeque Style Chicken Breast",
        foodType: "Chicken",
        calories: 376,
      },
      {
        foodName: "Cajun Style Chicken Breast",
        foodType: "Chicken",
        calories: 377,
      },
      {
        foodName: "Cheddar Style Chicken Breast",
        foodType: "Chicken",
        calories: 534,
      },
      { foodName: "Spicy Chicken Breast", foodType: "Chicken", calories: 446 },
      { foodName: "Regular BBQ Sandwich", calories: 368 },
      { foodName: "BBQ Plate", calories: 976 },
      { foodName: "Hot Dog", foodType: "Hot Dog", calories: 260 },
      {
        foodName: "Cook Out Style Hot Dog",
        foodType: "Hot Dog",
        calories: 383,
      },
      { foodName: "Mexi Hot Dog", foodType: "Hot Dog", calories: 362 },
      { foodName: "Bacon Cheddar Hot Dog", foodType: "Hot Dog", calories: 523 },
      {
        foodName: "Crispy Chicken Cajun Wrap",
        foodType: "Chicken Wrap",
        calories: 501,
      },
      {
        foodName: "Crispy Chicken Ranch Wrap",
        foodType: "Chicken Wrap",
        calories: 522,
      },
      {
        foodName: "Crispy Chicken Honey Mustard Wrap",
        foodType: "Chicken Wrap",
        calories: 517,
      },
    ],
  },
];

data = data.filter((e) => {
  e.foodItems.length = 20;

  return e;
});

const images = [
  "bowls (1).JPG",
  "bowls (2).JPG",
  "bowls (3).JPG",
  "noodles (1).JPG",
  "noodles (2).JPG",
  "noodles (3).JPG",
  "sandwiches (1).JPG",
  "sandwiches (2).JPG",
  "sandwiches (3).JPG",
  "wraps (1).JPG",
  "wraps (2).JPG",
  "wraps (3).JPG",
];

const restaurantsAll = data.map((e) => e.restaurant);

data = data.map((e) => {
  return {
    restaurant: e.restaurant,
    foodItems: e.foodItems.map((food) => {
      return {
        ...food,
        price: Math.floor((food?.calories * 3) / 100),
        image: images[Math.floor(Math.random() * images.length)],
      };
    }),
  };
});

function scroll(containerId) {
  var container = document.getElementById(containerId);
  var isMouseDown = false;
  var startX;
  var scrollLeft;
  console.log(container);
  container.addEventListener("mousedown", function (e) {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  container.addEventListener("mouseleave", function () {
    isMouseDown = false;
  });
  container.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
  container.addEventListener("mousemove", function (e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.pageX - container.offsetLeft;
    var walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}

function addToCart(food) {
  var cart = [];
  cart = JSON.parse(localStorage.getItem("food")) || [];
  cart.push(food);

  console.log(cart);
  localStorage.setItem("food", JSON.stringify(cart));
}
