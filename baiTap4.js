// Coding Challenge #5
const tinhDiemTB = (a, b, c) => {
    return (a + b + c) / 3;
}

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins > avgKoalas && avgDolhins >= avgKoalas * 2) {
        return "Đội Dolhins là đội giành chiến thắng";
    } else if (avgKoalas > avgDolhins && avgKoalas >= avgDolhins * 2) {
        return "Đội Koalas là đội giành chiến thắng";
    } else
        return "Không có đội nào đủ điều kiện giành chiến thắng";
}

const Dolhins = {
    score1: [44, 23, 71],
    score2: [85, 54, 41]
}

const Koalas1 = {
    score1: [65, 54, 49],
    score2: [23, 34, 27]
}

const avgDolhins = tinhDiemTB(Dolhins.score1[0], Dolhins.score1[1], Dolhins.score1[2]);
const avgKoalas = tinhDiemTB(Koalas1.score1[0], Koalas1.score1[1], Koalas1.score1[2]);

const avgDolhins1 = tinhDiemTB(Dolhins.score2[0], Dolhins.score2[1], Dolhins.score2[2]);
const avgKoalas1 = tinhDiemTB(Koalas1.score2[0], Koalas1.score2[1], Koalas1.score2[2]);



const winner1 = checkWinner(avgDolhins, avgKoalas);
const winner2 = checkWinner(avgDolhins1, avgKoalas1);
console.log(winner1);
console.log(winner2);