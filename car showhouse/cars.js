/* Need help with:


why is popACar with dots underneath? 
why doesn't the bulleted list display underneath the cars?
*/



function popACar(color, make, model, image, registrationNumber, price) {
  this.color = color;
  this.model = model;
  this.make = make;
  this.imageProfile = image;
  this.registrationNumber = registrationNumber;
  this.price = price;
  this.showMore = function () {
    let msg = this.make +'<br>'+ this.model +'<br>'+ this.registrationNumber + +'<br>'+ this.color  +'<br>' + this.price;
    document.getElementById("dialog").innerHTML = msg;
    document.getElementById("dialog").showModal();

    document.getElementById("dialog").addEventListener("click", function () {
      let button = document.createElement("button");
      button.innerHTML = "X";
      document.getElementById("dialog").appendChild(button);
      document.getElementById("dialog").close();
    })
  };
}

let car1 = new popACar("flashy red", "FerrariLuxury Sports", "Mazda", "car1.png", "EFGH5693", "R600,000");
let car2 = new popACar("mango", "PorcheLuxury Electric", "Porche", "car2.png", "MYYELLOWMANGO", "R780,000");
let car3 = new popACar("Red", "FordMass", "Ford", "car3.png", "WEHYT0993", "R358,000");
let car4 = new popACar("Black", "LamborghiniLuxury Sports", "Lamborghini", "car4.png", "JBGDI87886", "R300,000");
let car5 = new popACar("Mountain Blue", "MUV", "Toyota", "car5.png", "KLYT020", "R450,660");

let cars = [car1, car2, car3, car4, car5];

//two functions
// 1) displayCars (happens onload of pg - shows image of car, plus the make and model underneath.)
// 2) showMore (displays DIALOG of info. when an image is clicked. It's a method within the constructor object=See line 11/12 above.)


// function showMore(){
//   let carDetails = document.getElementById("carDetails");
// carDetails.addEventListener('click', )
//   carDetails.appendChild("dialog");//append the dialog, with text below to car details.
//   console.log( "<br> <dialog open>" + this.make+"<br>" +this.model+" "+this.registrationNumber+" "+this.color+" "+this.price+" "+" </dialog>");

// }


// car.imageProfile.addEventListener('click', function onOpen() {
//   if (typeof favDialog.showModal === "function") {
//     favDialog.showModal();
//   } else {
//     alert("The <dialog> API is not supported by this browser");
//   }
// });


let loaded = {};


loaded.displayCars = function () {

  cars.forEach(function (car) {
    let div = document.getElementById("carImages");
    // div.style.textAlign="center";

    // WHY ISN'T the LIST OF THE DETAILS TO EACH CAR IMAGE SHOWING ON THE PAGE, ONLY SHOWS IN CONSOLE?
    const p = document.createElement("p"); //create a paragraph to host the bullet points. why doesn't it work still.?
    const items = document.createElement("ol");
    const list = document.createElement("li");
    list.innerHTML = car.model + "<br>" + car.make; //the car details of each car.
    //append the details to each car element in an unordered list.
    items.appendChild(list);//appending the list to the 'ol' element.
    p.appendChild(items);
    let imgProfile = document.createElement("img");//should display the image of each car upon loading of page.
    imgProfile.src = car.imageProfile;
    imgProfile.alt = car.model + " " + car.make;
    imgProfile.style.height = "300px";
    imgProfile.style.width = "450px";
    imgProfile.style.padding = "15px";


    imgProfile.addEventListener('click', function () {
      car.showMore();
    });

    div.appendChild(imgProfile).appendChild(p);
  });
};


loaded.displayCars();


/*

The showMore method is a separate method/function that should
only be called upon clicking on a car image.


window.onload=function(){
document.getElementById("soundp").play();
}
*/






