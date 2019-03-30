// Code your solution here:
function driversWithRevenueOver(arr, value){
 return arr.filter(person => person.revenue > value);
}


function driverNamesWithRevenueOver(arr, value){
    const newArr = [];
    arr.filter(person => person.revenue > value ? newArr.push(person.name) : false );
    return newArr;
}

function exactMatch(arr, obj){

  return arr.filter(function(person){
    let newArr = [];

    for(const key in obj){
     newArr = person[key]===obj[key];
    }

    return newArr;
  });

}

function exactMatchToList(arr, obj){
  const newArr = [];
  arr.filter(person => person === obj ? newArr.push(person.name) : false );
  console.log(newArr);
  return newArr;
}
