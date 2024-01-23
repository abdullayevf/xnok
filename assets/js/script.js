const anchors = document.querySelectorAll('a[href*="#"]')
const burgerBtn = document.querySelector('#burger_btn')
const burgerMenu = document.querySelector('.burger_menu')

for(let anchor of anchors){
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute("href")
        document.querySelector("" + blockID).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle("open_burger")
})