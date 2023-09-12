// Coding Challenge #6
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? ((bill * 15) / 100) : ((bill * 20) / 100);
}


const bills = [125, 555, 44];
const tips = bills.map((bill) => {
    return (bill >= 50 && bill <= 300) ? ((bill * 15) / 100) : ((bill * 20) / 100);
})
const arrTotal = bills.map((bill) => {
    return (bill >= 50 && bill <= 300) ? (bill + ((bill * 15) / 100)) : (bill + ((bill * 20) / 100));
})

console.log(tips);
console.log(arrTotal);
