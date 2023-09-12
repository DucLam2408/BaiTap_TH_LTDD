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
console.log("Chỉ số BMI của mark theo data 1 là: " + tinhBMI(mark.mass1, mark.height1))
console.log("Chỉ số BMI của mark theo data 2 là: " + tinhBMI(mark.mass2, mark.height2))
console.log("Chỉ số BMI của john theo data 1 là: " + tinhBMI(john.mass1, john.height1))
console.log("Chỉ số BMI của john theo data 2 là: " + tinhBMI(john.mass2, john.height2))

const soSanhBMI = (a, b) => {
    if (a > b) {
        return true;
    } else
        return false;
}

const markHigherBMI = soSanhBMI(tinhBMI(mark.mass1, mark.height1), tinhBMI(mark.mass2, mark.height2)) ?
    "BMI của mark lớn hơn BMI của john" :
    "BMI của mark không lớn hơn BMI của john";
console.log(markHigherBMI);