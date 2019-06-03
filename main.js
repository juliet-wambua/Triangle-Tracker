
function getAnswer(){
   var sideA=parseFloat(document.getElementById("sideA").value);
   var sideB=parseFloat(document.getElementById("sideB").value);
   var sideC=parseFloat(document.getElementById("sideC").value);



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

   else if ((sideA+sideB) <= (sideC) || (sideA+sideC) <= (sideB) || (sideB+sideC)<= (sideA)) {
       alert("Not a triangle");


   else {
       alert("Not a triangle");
   }
}
