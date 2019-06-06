function TriangleTracker(){
var sideA = parseInt(document.getElementById("sideA").value);
var sideB = parseInt(document.getElementById("sideB").value);
var sideC = parseInt(document.getElementById("sideC").value);
 //defining the returning path
 // conditions for the program to meet for it to run effectively
  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
      liz = 'please input a number';
  }
  //conditions for values below 1
  else if (sideA <= 0 || sideB <= 0 || sideC <= 0){
      liz = 'Invalid entry kindly type again';
  }
  //conditions
  else if ((sideA+sideB) <= (sideC) || (sideA+sideC) <= (sideC) || (sideB+sideC)<= (sideA)) {
    liz = 'the coordinates can not make a triangle';
  }
  //the foolowing code is for an equilateral triangle

  else if (sideA===sideB && sideB === sideC && sideC ===sideA){
      liz = 'The cordinates are for an equilateral Triangle';
  }
  //the following is an Issceles Triangle
  else if (sideA === sideB || sideB == sideC || sideC ===sideA){
    liz = 'The cordinates are for an Isosceles Triangle';
  }
   //the following is an scalene Triangle
   else {
       liz = 'This is A Scalene Triangle ';
   }
   document.getElementById('text').innerHTML=liz ;
}
