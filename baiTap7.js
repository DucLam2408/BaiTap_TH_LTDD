//Coding Challenge #8
var arrBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var arrTips = [];
var arrTotals = [];

var calcTips = (bill) => {
  return (bill >= 50 && bill <= 300) ? ((bill * 15) / 100) : ((bill * 20) / 100);
}

var total = (bill) => {
  return (bill >= 50 && bill <= 300) ? (bill + ((bill * 15) / 100)) : (bill + ((bill * 20) / 100));
}

arrBills.forEach(element => {
  arrTips.push(calcTips(element));
  arrTotals.push(total(element))
});
console.log("Mảng tiền típ:");  
console.log(arrTips);
console.log("Mảng tiền tổng hóa đơn và típ:");
console.log(arrTotals)


const calcAverage = (arr) =>{
  let total = 0;
   arr.forEach((element) => {
     total += element;
   })
   return total/arr.length;
}

console.log("Trung bình tiền típ: " + calcAverage(arrTips));
console.log("Trung bình tiền tổng hóa đơn và típ: " + calcAverage(arrTotals));
