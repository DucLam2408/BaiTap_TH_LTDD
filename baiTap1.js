// Coding Challenge #1&2
const tinhBMI = (mass, height) => {
    return (mass / (height * height));
}

const mark = {
    mass1: 78,
    height1: 1.68,
    mass2: 95,
    height2: 1.88
}
const john = {
    mass1: 92,
    height1: 1.95,
    mass2: 85,
    height2: 1.76
}
console.log("Chỉ số BMI của mark theo data 1 là: " + tinhBMI(mark.mass1, mark.height1).toFixed(2))
console.log("Chỉ số BMI của mark theo data 2 là: " + tinhBMI(mark.mass2, mark.height2).toFixed(2))
console.log("Chỉ số BMI của john theo data 1 là: " + tinhBMI(john.mass1, john.height1).toFixed(2))
console.log("Chỉ số BMI của john theo data 2 là: " + tinhBMI(john.mass2, john.height2).toFixed(2))

const soSanhBMI = (a, b) => {
    if (a > b) {
        return true;
    } else
        return false;
}
const bmiMark = tinhBMI(mark.mass1, mark.height1).toFixed(2);
const bmiJohn = tinhBMI(mark.mass2, mark.height2).toFixed(2);
const markHigherBMI = soSanhBMI(bmiMark, bmiJohn) ?
    `BMI của mark(${bmiMark}) lớn hơn BMI của john(${bmiJohn})` :
    `BMI của mark(${bmiMark}) không lớn hơn BMI của john(${bmiJohn})`;
console.log(markHigherBMI);

