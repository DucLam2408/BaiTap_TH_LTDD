//Coding Challenge #9
var nhietDo1 = [17, 21, 23];
var nhietDo2 = [12, 5, -5, 0, 4];

const printForecast = (arr) =>{
  for(var i = 0; i < arr.length; i++){
    console.log(`${arr[i]}oC in ${i + 1} ngày`);
  }
}

printForecast(nhietDo1);
printForecast(nhietDo2)

