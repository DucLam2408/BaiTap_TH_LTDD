// const calcTip = (bill) => {
//     return (bill >= 50 && bill <= 300) ? ((bill * 15) / 100) : ((bill * 20) / 100);
// }


const bills = [125, 555, 44];
const tips = bills.map((bill) => {
    return (bill >= 50 && bill <= 300) ? ((bill * 15) / 100) : ((bill * 20) / 100);
})
const arrTotal = bills.map((bill) => {
    return (bill >= 50 && bill <= 300) ? (bill + ((bill * 15) / 100)) : (bill + ((bill * 20) / 100));
})

console.log(tips);
console.log(arrTotal);

// for là vòng lặp, map là vòng lặp
// for là nó chế biến trực tiếp vô cái mảng
// map là nó tạo mảng mới, nó chế biến cái mảng cũ rồi nó push vô cái mảng mới