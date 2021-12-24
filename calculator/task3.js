document.getElementById("button").addEventListener('click', function (event) {

  if (event.target.dataset.counter != undefined) {
    event.target.value++;
  }
  if (event.target.value == 1) {
    document.getElementById("clicksCounted").innerHTML = "You clicked " + event.target.value + " time!";
  } else {
    document.getElementById("clicksCounted").innerHTML = "You clicked " + event.target.value + " times!";
  }
});

//why doesn't the min value work in task3.html, to make only values from 1 accepted?

function dropdown() {
  var values = [
    "salmon",
    "chinese apples",
    "Beef burgers",
    "Chicken burgers",
    "Fries",
    "onion rings",
    "pizza",
    "pasta",
    "spaghetti balognaise",
    "shnitzel",
    "beef cutlets",
    "steak",
    "ribs",
    "lamb chops",
    "Spinach",
    "Greek salad",
    "Feta cheese",
    "olive Teramisini",
    "French Cheese platter",
    "Baked Ziti",
    "Tuna lasagna",
    "Cheese lasagna",
    "Apple Tart",
    "Potato roast",
    "Fried hake fillet",
  ];

  var select = document.createElement("select");
  select.name = "values";
  select.id = "values";

  for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text =
      values.indexOf(val) +
      1 +
      "." +
      val.charAt(0).toUpperCase() +
      val.slice(1);
    select.appendChild(option);
  }

  var label = document.createElement("label");
  label.innerHTML = "Choose your desired dish: ";
  label.htmlFor = "values";

  document.getElementById("listmenu").appendChild(label).appendChild(select);
}


function addOn(catchValue) {
  let screen = document.getElementById("rectangle");
  // function sqrt(root){
  //   screen.innerHTML += Math.sqrt(root.value);
  //   return screen.innerHTML;
  //   }
  //screen.innerHTML += catchValue.value+sqrt(root);
  screen.innerHTML += catchValue.value;
  return screen.innerHTML;
}

function clearScreen() {
  //displaying what is on the screen.
  let screen = document.getElementById("rectangle");
  let lastValue = screen.innerHTML.slice(0, screen.length - 1);
  console.log(lastValue);
  screen.innerHTML = lastValue;
}

function clearAll() {
  //displaying what is on the screen.
  let screen = document.getElementById("rectangle").innerHTML;
  //setting rectangle to display nothing
  screen = "";
  //assigning this value of 'nothingness' to display in the rectangle.
  document.getElementById("rectangle").innerHTML = screen;
}

function calculate() {
  let screenView = document.getElementById("rectangle").innerHTML;
  //calculating the input from what the user pressed in.
  let answer = eval(screenView);
  //return answer only.
  document.getElementById("rectangle").innerHTML = answer;
  //clear screen
  screenView = "";
}


/*
once pressed on equals should show answer. then when press on another number,
 if it's not an operator, screen should clear and new number should show up only, (wihtout prev. answer/digits)
 how do I do this?
 for eg. 8+7=15. if I now press on 6, it shouldn't say 156, but rather clear screen and show 6 only.
*/

