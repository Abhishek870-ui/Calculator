function add()
{
  
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("result").value = sum;
  
}

function sub()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne - numTwo;
  document.getElementById("result").value = sum;
}

function mul()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne * numTwo;
  document.getElementById("result").value = sum;
}

function div()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne / numTwo;
  document.getElementById("result").value = sum;
}