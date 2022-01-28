function add()
{
  
  var numOne, numTwo, sum;
  numOne = parseFloat(document.getElementById("first").value);
  numTwo = parseFloat(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("result").value = sum;
  
}

function sub()
{
  var numOne, numTwo, sum;
  numOne = parseFloat(document.getElementById("first").value);
  numTwo = parseFloat(document.getElementById("second").value);
  sum = numOne - numTwo;
  document.getElementById("result").value = sum;
}

function mul()
{
  var numOne, numTwo, sum;
  numOne = parseFloat(document.getElementById("first").value);
  numTwo = parseFloat(document.getElementById("second").value);
  sum = numOne * numTwo;
  document.getElementById("result").value = sum;
}

function div()
{
  var numOne, numTwo, sum;
  numOne = parseFloat(document.getElementById("first").value);
  numTwo = parseFloat(document.getElementById("second").value);
  sum = numOne / numTwo;
  document.getElementById("result").value = sum;
}
