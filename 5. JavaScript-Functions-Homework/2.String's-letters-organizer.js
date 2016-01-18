function sortLetters(string, boolean) {
    var stringArray = string.split('');
    var sortedString;

    if (boolean === true) {
        sortedString = stringArray.sort(function(a, b) {
            return a.toLowerCase() > b.toLowerCase()
        });
    } else {
        sortedString = stringArray.sort(function (a, b) {
            return a.toLowerCase() < b.toLowerCase()
        });
    }
    return sortedString.join('');
}

console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));