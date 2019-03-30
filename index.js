// Code your solution here:
function driversWithRevenueOver(arr, value){
 return arr.filter(person => person.revenue > value);
}


function driverNamesWithRevenueOver(arr, value){
   const newArr = arr.map(person => person.revenue > value ? person.name : NaN );

   for (const name of newArr){
     console.log(newArr[name]);
   }
   console.log(newArr);
   return newArr;
}

function exactMatch(arr, obj){

  return arr.filter(person => person.value === obj[0]);

}
