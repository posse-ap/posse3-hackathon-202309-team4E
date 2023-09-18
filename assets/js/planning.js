//このjsはかおるが作りました
//参加者リアクション

// const CLbutton = document.getElementById("close-button")

const kuwashii = document.getElementById("detail-1")

const detail = document.getElementById("detail-sheet")

const detail1 = document.getElementById("detail-sheet1")

const detail2 = document.getElementById("detail-sheet2")

const OPbutton = document.getElementById("open-button")

const OPbutton1 = document.getElementById("open-button1")

const OPbutton2 = document.getElementById("open-button2")

const joinjs = document.getElementById("join")
joinjs.addEventListener("click", function () {
    joinjs.classList.toggle("color-change");
});

document.addEventListener("DOMContentLoaded", function () {
    const joinjs = document.getElementById("join");
    if (joinjs) {
        joinjs.addEventListener("click", function () {
            joinjs.classList.toggle("color-change");
        });
    } else {
        console.error("Element with id 'join' not found.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const joinjs1 = document.getElementById("join1");
    if (joinjs1) {
        joinjs1.addEventListener("click", function () {
            joinjs1.classList.toggle("color-change");
        });
    } else {
        console.error("Element with id 'join' not found.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const joinjs2 = document.getElementById("join2");
    if (joinjs2) {
        joinjs2.addEventListener("click", function () {
            joinjs2.classList.toggle("color-change");
        });
    } else {
        console.error("Element with id 'join' not found.");
    }
});

// CLbutton.addEventListener("click", function () {
//     CLbutton.classList.toggle("hidden");
//     kuwashii.classList.toggle("hidden");
//     detail.classList.toggle("hidden");
//     detail1.classList.toggle("hidden");
//     detail2.classList.toggle("hidden");
// });


OPbutton.addEventListener("click", function () {
    detail.classList.toggle("hidden");
    // CLbutton.classList.toggle("hidden");
    kuwashii.classList.toggle("hidden");
});

OPbutton1.addEventListener("click", function () {
    detail1.classList.toggle("hidden");
    // CLbutton.classList.toggle("hidden");
    kuwashii.classList.toggle("hidden");
});

OPbutton2.addEventListener("click", function () {
    detail2.classList.toggle("hidden");
    // CLbutton.classList.toggle("hidden");
    kuwashii.classList.toggle("hidden");
});