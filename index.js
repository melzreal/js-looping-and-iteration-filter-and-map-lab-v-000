// Code your solution here:
function driversWithRevenueOver(arr, value){
 return arr.filter(person => person.revenue > value);
}


function driverNamesWithRevenueOver(arr, value){
   const newArr = [];
   newArr.push(arr.filter(person => person.revenue > value ));
   console.log(newArr[name]);
   return newArr;
}

function exactMatch(arr, obj){

  return arr.filter(person => person.value === obj[0]);

}
