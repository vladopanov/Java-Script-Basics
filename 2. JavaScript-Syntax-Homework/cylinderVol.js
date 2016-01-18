function calcCylinderVol(arr) {
    var radius = arr[0];
    var height = arr[1];
    var volume = Math.PI * (radius * radius) * height;
    console.log(volume.toFixed(3));
}

var arr = [2, 4];
calcCylinderVol(arr);

var arr = [5, 8];
calcCylinderVol(arr);

var arr = [12, 3];
calcCylinderVol(arr);