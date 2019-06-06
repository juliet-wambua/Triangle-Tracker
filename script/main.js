function triangleTracker(){
var ln1 = parseInt(document.getElementById("sideA").value);
var ln2 = parseInt(document.getElementById("sideB").value);
var ln3 = parseInt(document.getElementById("sideC").value);
 //defining the returning path
var parp = document.querySelector('.text-p');
 // conditions for the program to meet for it to run effectively
  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
      parp.textContent = 'please input a number';
  }
  //conditions for values below 1
  else if (sideA <= 0 || sideB <= 0 || sideC <= 0){
      parp.textContent = 'Invalid entry kindly type again';
  }
  //conditions
  else if ((sideA+sideB) <= (sideC) || (sideA+sideC) <= (sideC) || (sideB+sideC)<= (sideA)) {
    parp.textContent = 'the coordinates can not make a triangle';
  }
  //the foolowing code is for an equilateral triangle

  else if (sideA===sideB && sideB === sideC && sideC ===sideA){
      parp.textContent = 'The cordinates are for an equilateral Triangle';
  }
  //the following is an Issceles Triangle
  else if (sideA === sideB || sideB == sideC || sideC ===sideA){
    parp.textContent = 'The cordinates are for an Isosceles Triangle';
  }
   //the following is an scalene Triangle
   else {
       parp.textContent = 'This is A Scalene Triangle ';
   }
}
