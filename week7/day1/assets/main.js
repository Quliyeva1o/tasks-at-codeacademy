const countDiv = document.querySelector(".countDiv")
let count = localStorage.getItem("count") || 0;

countDiv.innerHTML =
    `
<button class="min-btn">-</button>
<span class="count">${count}</span>
<button class="max-btn">+</button>`

const minBtn = document.querySelector(".min-btn")
const maxBtn = document.querySelector(".max-btn")
const counthtml = document.querySelector(".count")

function updateCountDisplay() {
    counthtml.textContent = count;
}

function updateLocalStorage() {
    localStorage.setItem("count", count);
}


updateCountDisplay();

minBtn.addEventListener('click', (e) => {
    e.preventDefault()
    count--;
    updateCountDisplay();
    updateLocalStorage();
})

maxBtn.addEventListener('click', (e) => {
    e.preventDefault()
    count++;
    updateCountDisplay();
    updateLocalStorage();
})
