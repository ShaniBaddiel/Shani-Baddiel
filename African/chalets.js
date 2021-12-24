var myIndex = 0;
imgSlider();

function imgSlider() {
  var i;
  var slideshow = document.getElementsByTagName("img");
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";  
  
  }
  myIndex++;
  if (myIndex > slideshow.length) {myIndex = 1} ;   
  slideshow[myIndex-1].style.display = "block";  
  setTimeout(imgSlider, 2000); 
}

    
    
