var s = document.createElement('script');
s.src = chrome.runtime.getURL('setgame/script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

var button = document.createElement('a');
button.text = "Solve";
button.href = "javascript:for (set_num in board.theSets) {for (card_id in board.theSets[set_num]) {board.cardClicked(board.theSets[set_num][card_id]);}}"
document.getElementsByClassName('yesterdays-solution')[0].appendChild(button)