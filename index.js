// Code your solution here:
function driversWithRevenueOver(arr, value){
 return arr.filter(person => person.revenue > value);
}


function driverNamesWithRevenueOver(arr, value){
  const newArr = []
   for (const person of arr)
     if(person.revenue > value){
      newArr.push(person.name);
    }
    return newArr;
}

function exactMatch(arr, obj){

  return arr.filter(person => person.value === obj[0]);

}
