const hamburgerBtn = document.querySelector(".navbar--hamburger-btn")
const menuBar = document.querySelector(".navbar--sidebar")


hamburgerBtn.addEventListener('click',(e) => {

    if (menuBar.classList.contains('active')){
        menuBar.classList.remove('active')
    } else {
   menuBar.classList.add('active')
}
})