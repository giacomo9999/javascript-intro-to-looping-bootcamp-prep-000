function forLoop(array)
{
  for (var x = 0; x <= 24; x++)
  {
    array.push("I am ${i} strange loop${x}.")
  }
  return array;
}

function whileLoop(n)
{
  while (n>0) {
  console.log(n)
  n -=1
}
return "done";
}
