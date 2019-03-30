// Code your solution here:
function driversWithRevenueOver(arr, value){
 return arr.filter(person => person.revenue > value);
}


function driverNamesWithRevenueOver(arr, value){
   const newArr = []
   arr.map(person => person.revenue > value ? return newArr.push(person.name) : NaN );
}

function exactMatch(arr, obj){

  return arr.filter(person => person.value === obj[0]);

}
