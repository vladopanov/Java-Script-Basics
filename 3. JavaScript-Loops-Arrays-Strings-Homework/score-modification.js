var numArray = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

var validScores = new Array();
for (var number in numArray) {
    var n = numArray[number];
    if (n >= 0 && n <= 400) {
        n *= 0.8;
        validScores.push(n);
    }
}

validScores.sort(function(a, b) {
    return a > b;
});

var result = new Array();
for (var n in validScores) {
    result.push(Math.round(validScores[n] * 100) / 100);
}

console.log(result);