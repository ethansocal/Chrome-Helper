let digits = "";
document.onkeydown = function (e) {
    if (e.key === "s") {
        let num = 0;
        for (set_num in board.theSets) {
            for (card_id in board.theSets[set_num]) {
                let current_set_num = set_num;
                let current_card_id = card_id;
                num++
                setTimeout(
                    function() {
                        board.cardClicked(board.theSets[current_set_num][current_card_id]);
                    },
                    num * 400
                );
            }
        }
    } else if (e.key === "Backspace") {
        digits = digits.slice(0, -1);
    } else if (e.key == "Enter") {
        document.getElementById("gameover-submit_time").value = digits;
        document.getElementById("gameover").submit();
    } else {
        digits = digits + e.key;
    }
}
