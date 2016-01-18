var turn = 1;

function makeTurn(clicked_id) {
    if (turn % 2 !== 0) {
        document.getElementById(clicked_id).innerHTML = "O";   document.getElementById(clicked_id).style.color = "green";
        document.getElementById(clicked_id).style.borderColor = "black";
        turn += 1;
    } else {
        document.getElementById(clicked_id).innerHTML = "X";
        turn += 1;
    }
}