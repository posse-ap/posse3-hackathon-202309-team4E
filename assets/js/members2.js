const mainBox = document.querySelector('.boxes-container');
const boxes = document.querySelectorAll('.box');
let index = 0;

function boxChange() {
    boxes.forEach(box => {
    box.classList.add("hidden");
    });

    boxes[index].classList.remove("hidden");
}

mainBox.addEventListener('click', () => {
    index++;
    if (index === boxes.length) {
    index = 0;
    }

    boxChange();
});