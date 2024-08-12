let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let my_score = document.getElementById("my_score");
let comp_score = document.getElementById("comp_score");
let msg = document.getElementById("msg");

const display_msg1 = () => {
    msg.innerText = " Match Draw";
    msg.style.display = "flex";``

}

const display_msg2 = () => {
    msg.innerText = "You Win !!";
    msg.style.display = "flex";``

}

const display_msg3 = () => {
    msg.innerText = "You Lose";
    msg.style.display = "flex";``
}

// check win function
let checkWinner = () => {
    if (my_option === comp_option) {
        display_msg1();
    }
    else if (my_option === "stone" && comp_option === "scissor") {
        my_score.innerText = parseInt(my_score.innerText) + 1;
        display_msg2();

    }
    else if (my_option === "stone" && comp_option === "paper") {
        comp_score.innerText = parseInt(comp_score.innerText) + 1;
        display_msg3();

    }
    else if (my_option === "paper" && comp_option === "stone") {
        my_score.innerText = parseInt(my_score.innerText) + 1;
        display_msg2();


    }
    else if (my_option === "paper" && comp_option === "scissor") {
        comp_score.innerText = parseInt(comp_score.innerText) + 1;
        display_msg3();


    }
    else if (my_option === "scissor" && comp_option === "stone") {
        comp_score.innerText = parseInt(comp_score.innerText) + 1;
        display_msg3();


    }
    else if (my_option === "scissor" && comp_option === "paper") {
        my_score.innerText = parseInt(my_score.innerText) + 1;
        display_msg2();


    }
}

const options = ["stone","paper","scissor"];

let comp_option ;

const random_Options = () => {
    comp_option = options[Math.floor(Math.random() * options.length)];
    
}

let my_option;
stone.addEventListener("click",() => {
    my_option = "stone";
    random_Options();
    checkWinner();
})

paper.addEventListener("click",() => {
    my_option = "paper";
    random_Options();
    checkWinner();

})

scissor.addEventListener("click",() => {
    my_option = "scissor";
    random_Options();
    checkWinner();

})


