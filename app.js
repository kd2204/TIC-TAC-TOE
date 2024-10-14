boxes = document.querySelectorAll(".box")
reset = document.querySelector("#reset");
newbtn = document.querySelector("#new")
para = document.querySelector("#msg");
cont = document.querySelector(".msg-cont")

let turnO = true;
let count = 0; //to track draw
const winCond = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const resetGame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    cont.classList.add("hide");
}
for (let box of boxes) {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;

        let winner = checkwinner();

        if (count == 9 && !winner) {
            gamedraw()
        }
    })
}
const gamedraw = () => {
    para.innerText = "Game was a Draw!"
    cont.classList.remove("hide");
    disableboxes();
}
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    para.innerText = `Congratulations , Winner is ${winner}`;
    cont.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for (let pattern of winCond) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);