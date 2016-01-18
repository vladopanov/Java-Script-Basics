function calcExpression() {
    var expression = document.getElementById('field').value;
    var values = expression.split(/\D/);
    var signs = expression.split(/\d+/);
    signs.pop();
    signs.shift();

    var result = Number(values[0]);
    for (var index = 0; index < signs.length; index++) {
        var a = Number(result);
        var b = Number(values[index + 1]);
        var sign = signs[index];

        switch (sign) {
            case '+':
                result = (a) + (b);
                break;
            case '-':
                result = (a) - (b);
                break;
            case '*':
                result = (a) * (b);
                break;
            case '/':
                result = (a) / (b);
                break;
        }
    }

    document.getElementById('result').innerHTML = result;
}