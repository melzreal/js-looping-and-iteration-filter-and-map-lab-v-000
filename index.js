// Code your solution here:
function driversWithRevenueOver(arr, value){
 return arr.filter(person => person.revenue > value);
}


function driverNamesWithRevenueOver(arr, value){
  const newArr = []
  return arr.filter(person =>
    if (person.revenue > value){
      newArr.push(person);
    }
}

function exactMatch(arr, obj){

  return arr.filter(person => person.value === obj[0]);

}
