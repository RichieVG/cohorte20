let matriz1 = [
    [2, 2, 2],
    [1, 3, 4],
    [6, 1, 5]
];

let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizR = [
    [],[],[]
];

for (let i = 0; i < 3; i++){
    for (let j = 0; j <3; j++){
        matrizR[i][j] = matriz1[i][j] * matriz2[j][i];
    }
}

console.log(matrizR);