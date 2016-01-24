Array.prototype.removeItem = function removeItem(value) {
    var filteredArray = this;
    for (var i = 0; i < filteredArray.length; i++) {
        if (value === this[i]) {
            filteredArray.splice(i, 1);
        }
    }
    return filteredArray;
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.removeItem(1));

var arr = ['hi', 'bye', 'hello' ];
console.log(arr.removeItem('bye'));