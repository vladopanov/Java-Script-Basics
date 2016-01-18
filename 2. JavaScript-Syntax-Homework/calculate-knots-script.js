function convertKmToKnots(element) {
element /= 1.852;
    console.log(element.toFixed(2));
}

var arr = [20, 112, 400];
arr.forEach(convertKmToKnots);