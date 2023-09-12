// Coding Challenge #3
const tinhTB = (a, b, c) => {
    return (a + b + c) / 3;
}

const Dolphins = {
    score1: [96, 108, 89],
    score2: [97, 112, 101],
    score3: [97, 112, 101]
}

const Koalas = {
    score1: [88, 91, 110],
    score2: [109, 95, 123],
    score3: [109, 95, 106]
}
const diem1 = tinhTB(Dolphins.score1[0], Dolphins.score1[1], Dolphins.score1[2]).toFixed(2);
const diem2 = tinhTB(Koalas.score1[0], Koalas.score1[1], Koalas.score1[2]).toFixed(2);
console.log("Điểm trung bình của đội Dolphins là: " + diem1 );
console.log("Điểm trung bình của đội Koalas là: " + diem2);

const timDoiChienThang = (a, b) => {
    if (a > b) {
        return "Đội Dolphins giành chiến thắng";
    } else if (a == b) {
        return "Hai đội hòa nhau";
    } else
        return "Đội Koalas giành chiến thắng";
}
const doiChienThang1 = timDoiChienThang(tinhTB(Dolphins.score1[0], Dolphins.score1[1], Dolphins.score1[2]), tinhTB(Koalas.score1[0], Koalas.score1[1], Koalas.score1[2]));
const doiChienThang2 =  timDoiChienThang(tinhTB(Dolphins.score2[0], Dolphins.score2[1], Dolphins.score2[2]), tinhTB(Koalas.score2[0], Koalas.score2[1], Koalas.score2[2]));
const doichienthang3 =   timDoiChienThang(tinhTB(Dolphins.score3[0], Dolphins.score3[1], Dolphins.score3[2]), tinhTB(Koalas.score3[0], Koalas.score3[1], Koalas.score3[2]));
console.log("Test data 1: " + doiChienThang1);
console.log("Test data 2: " + doiChienThang2);
console.log("Test data 3: " + doichienthang3);



const timDoiChienThang2 = (a, b) => {
    if (a > b && a >= 100) {
        return "Đội Dolphins giành chiến thắng";
    } else if (a == b && a >= 100) {
        return "Hai đội hòa nhau";
    } else if (b > a && b >= 100) {
        return "Đội Koalas giành chiến thắng";
    } else
        return "cả 2 đội đều không đủ điều kiện"
}
console.log("Test data 1: " + timDoiChienThang2(tinhTB(Dolphins.score1[0], Dolphins.score1[1], Dolphins.score1[2]), tinhTB(Koalas.score1[0], Koalas.score1[1], Koalas.score1[2])));
console.log("Test data 2: " + timDoiChienThang2(tinhTB(Dolphins.score2[0], Dolphins.score2[1], Dolphins.score2[2]), tinhTB(Koalas.score2[0], Koalas.score2[1], Koalas.score2[2])));
console.log("Test data 3: " + timDoiChienThang2(tinhTB(Dolphins.score3[0], Dolphins.score3[1], Dolphins.score3[2]), tinhTB(Koalas.score3[0], Koalas.score3[1], Koalas.score3[2])));