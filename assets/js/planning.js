
//参加者リアクション
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

const joinjs = document.getElementById("join")
joinjs.addEventListener("click", function () {
    joinjs.classList.toggle("color-change");
});