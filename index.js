// Code your solution here:
function driversWithRevenueOver(arr, value){
 return arr.filter(person => person.revenue > value);
}


function driverNamesWithRevenueOver(arr, value){
    const newArr = []
    arr.filter(person => person.revenue > value ? newArr.push(person.name) : false );
    return newArr;
}

function exactMatch(arr, obj){
  const newArr = arr.map(obj =>{
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
  });
  console.log(newArr);
}
