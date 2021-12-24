//tips page

function calculateTip(){
  let Bill, tip, numppl, totalAmount; 
  Bill=document.getElementById("bill").value;
  console.log(Bill);

  let select=document.getElementById("selectService");
  tip=Number((select.value/100)*Bill)+Number(document.getElementById("bill").value);
   console.log(tip);

 numppl = document.getElementById("numppl").value;
 console.log(numppl);

 totalAmount=tip/numppl;

 if(totalAmount==='$NaN'){
  alert("Please enter the required fields to calculate.");
}
 else{ 
 document.getElementById("final").innerHTML="You need to pay the amount of $"+totalAmount;
}

}


