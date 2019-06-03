
function getAnswer(){
   var sideA=parseFloat(prompt("Enter side A:"));
   var sideB=parseFloat(prompt("Enter side B:"));
   var sideC=parseFloat(prompt("Enter side C:"));



   if(sideA===0) {
       alert("invalid");
   }

   else if(sideA===sideB && sideA===sideC && sideB===sideC) {
       alert("Equilateral Triangle");
   }

   else if(sideA===sideB || sideA===sideC || sideB===sideC) {
       alert("Isosceles Triangle");
   }

   else if(sideA + sideB > sideC || sideA + sideC > sideB || sideB + sideC > sideA) {
       alert("Scalene Triangle");
   }



   else {
       alert("Not a triangle");
   }
}
