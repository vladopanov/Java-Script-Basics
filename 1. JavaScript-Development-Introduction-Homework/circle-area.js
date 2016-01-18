function calcCircleArea(r) {
    return Math.PI * (r * r);
}

document.getElementById("firstArea").innerHTML = calcCircleArea(document.getElementById("firstR").innerHTML);
document.getElementById("secondArea").innerHTML = calcCircleArea(document.getElementById("secondR").innerHTML);
document.getElementById("thirdArea").innerHTML = calcCircleArea(document.getElementById("thirdR").innerHTML);