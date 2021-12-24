
//This function is used to convert to three different currencies
function convertMoney() {
    let Rands = document.getElementById("rands").value;
    if (Rands.length == 0) {
      alert("Please enter an amount first!");
    } else {
      let dollars = (Rands / 15).toFixed(2);
      let pounds = (Rands / 20.38).toFixed(2);
      let euros = (Rands / 18).toFixed(2);
      //a variable 'converted' has been made to capture the data and return the converted amount into the currencies.
      let converted =
        "Dollars: $" +
        dollars
        + "<br>" +
        " Pounds: &#163;" + pounds
        + "<br>" +
        "Euros: &#8364;" +
        euros;
      document.getElementById("convertedMoney").innerHTML = converted;
    }
  }
  

  