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

   return arr.map(function(person){
    for(const key in obj){
     const newArr = person[key]===obj[key] ? person[key] : false ;
    }
  });

}
