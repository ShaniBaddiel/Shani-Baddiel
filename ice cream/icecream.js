//this is the javascript ice cream page!

setTimeout(function(){
 document.getElementById("audio").play();
    }, 10000);


function showPrice(event){
var obj=document.getElementById("price1");
if(obj.style.display==="block")
obj.style.display="none"
else
obj.style.display="block"
}


function showScoops(event){
var scoops=document.getElementById("scoops");
if(scoops.style.display==="block")
scoops.style.display="none"
else
scoops.style.display="block"
}


function showPop(event){
  var pop=document.getElementById("pop");
if(pop.style.display==="block")
pop.style.display="none"
else
pop.style.display="block"
}


function showCoke(event){
var coke=document.getElementById("coke");
if(coke.style.display==="block"){
coke.style.display="none";}
else{
coke.style.display="block";
}}


document.getElementById("price1").addEventListener(click,showPrice);

document.getElementById("scoops").addEventListener(click,showScoops);

document.getElementById("pop").addEventListener(click,showPop);

document.getElementById("coke").addEventListener(click,showCoke);



 

/*why not working?

document.getElementById("star").addEventLister(click,changeProperty());

function changeProperty()
{var img=document.getElementById("starimg");
    img.height="5px";
    img.width="4px"; }
*/

function revealStar(){
   var star = document.getElementById("star");
   var uncover= document.getElementById("uncov").style.display="none";
    star.style.display="block"; 
     var discount=document.getElementById("discount").style.display="block";
}

















