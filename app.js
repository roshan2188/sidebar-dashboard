const shrink_btn = document.querySelector(".shrink-button");
const search_button = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");

let activeIndex = 0;



shrink_btn.addEventListener("click", () => {
    console.log("hello");
    document.body.classList.toggle("shrink");

    setTimeout(moveToActiveTab, 400);

    shrink_btn.classList.add("hovered");
    
    setTimeout(() => {
        shrink_btn.classList.remove("hovered");
    }, 500)
});

search_button.addEventListener("click", () => {
    document.body.classList.remove("shrink");
    search_button.lastElementChild.focus();
});

function moveToActiveTab(){
    let topPosition = activeIndex * 58 + 2.5;

    if(activeIndex > 3){
        topPosition = topPosition + shortcuts.clientHeight;
    }

    active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
    sidebar_links.forEach(sideLink => sideLink.classList.remove("active"));
    this.classList.add("active");
    activeIndex = this.dataset.active;
    moveToActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink))