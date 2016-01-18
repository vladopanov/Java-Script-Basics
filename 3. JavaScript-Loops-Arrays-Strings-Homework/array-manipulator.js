var arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

function isNumber(obj) {
    return !isNaN(obj);
}

// Filter numbers
var numbers = arr.filter(isNumber);

// Get min
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
var min = getMinOfArray(numbers);

// Get max
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
var max = getMaxOfArray(numbers);

// Get most frequent
function getMostFrequent (numArray) {
    var currentFrequence = new Array();
    var currentMostFrequent = new Array();

    for (var num in numArray) {
        var n = numArray[num];
        for (var i = 0; i < numArray.length; i++) {
            if (n === numArray[i]) {
                currentFrequence.push(numArray[i]);
            }
        }
        if (currentFrequence.length > currentMostFrequent) {
            currentMostFrequent = currentFrequence;
        }
    }

    return currentMostFrequent[0];
}
var mostFrequent = getMostFrequent(numbers);

// Get sorted
numbers.sort(function(a, b) {
    return a < b;
});

console.log('Min number: ' + min);
console.log('Max number: ' + max);
console.log('Most frequent number: ' + mostFrequent);
console.log('[' + numbers.join(', ') + ']');