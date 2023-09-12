// Coding Challenge #4
const tip = (bill) => {
    return (bill >= 50 && bill <= 300) ? (bill + ((bill * 15) / 100)) : (bill + ((bill * 20) / 100));
}

const data = [275, 40, 430];

console.log("Tiền tip của hóa đơn ứng với data1 là: " + tip(data[0]));

console.log("Tiền tip của hóa đơn ứng với data1 là: " + tip(data[1]));

console.log("Tiền tip của hóa đơn ứng với data1 là: " + tip(data[2]));