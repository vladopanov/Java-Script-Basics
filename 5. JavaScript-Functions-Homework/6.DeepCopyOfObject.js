function clone(obj) {
    var stringObj = JSON.stringify(obj);
    var objCopy = JSON.parse(stringObj);
    return objCopy;
}

function compareObjects(obj, objCopy) {
    console.log('a == b --> ' + (obj == objCopy));
}

var a = {name: 'Pesho', age: 21};
var b = clone(a); // a deep copy
compareObjects(a, b);

var a = {name: 'Pesho', age: 21};
var b = a; // not a deep copy
compareObjects(a, b);