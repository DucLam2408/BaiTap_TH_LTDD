const tinhBMIs = (a, b) => {
    return (a / (b * b));
}

const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: 0
}
const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: 0
}
markMiller.calcBMI = tinhBMIs(markMiller.mass, markMiller.height)
johnSmith.calcBMI = tinhBMIs(johnSmith.mass, johnSmith.height)
const compareBMI = (a, b) => {
    if (a > b) {
        return true;
    } else
        return false;
}

const st1 = `Chỉ số BMI của Mark (${markMiller.calcBMI.toFixed(2)}) cao hơn John (${johnSmith.calcBMI.toFixed(2)})`;
const st2 = `Chỉ số BMI của Mark (${johnSmith.calcBMI.toFixed(2)}) cao hơn John (${markMiller.calcBMI.toFixed(2)})`;
const check = compareBMI(markMiller.calcBMI, johnSmith.calcBMI) ? st1 : st2;
console.log(check)