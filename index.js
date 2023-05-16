const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup-img");
const popupClose = document.querySelector(".popupClose");
const arrowLeft = document.querySelector(".popup-arrow-left")
const arrowRight = document.querySelector(".popup-arrow-right")
const hamburgerBtn = document.querySelector(".navbar--hamburger-btn")
const menuBar = document.querySelector(".navbar--sidebar")
// let currentImageIndex;

// const nextImage = () => {
//     if (currentImageIndex === thumbnails.length -1) {
//         currentImageIndex = 0
//     } else {
//         popupImg.src = thumbnails[currentImageIndex].src
//     }

//     currentImageIndex = currentImageIndex +1
// }
// const perviousImage = () => {
//     if (currentImageIndex === 0) {
//         currentImageIndex = thumbnails.length -1
//     } else {
//         currentImageIndex--
//     }

//     popupImg.src = thumbnails[currentImageIndex].src

// }

// const closePopup = () => {
//     popupClose.classList.add('fadeOut')
//     setTimeout(() => {
//         popup.classList.add('hidden')
//         popup.classList.remove('fadeOut')
//     }, 300)
    
// }

// thumbnails.forEach((thumbnail, index) => {
//     const showPopUp = (e) => {
//      popup.classList.remove('hidden')
//         popupImg.src = e.target.src
//         currentImageIndex = index
//     }  
    
//     thumbnail.addEventListener('click', showPopUp)

//     thumbnail.addEventListener('keydown', (e) => {
//         if (e.code === 'Enter' || e.keyCode === 13) {
//             showPopUp(e)
//         }
//     })
// })

// popupClose.addEventListener('click', closePopup)

// arrowRight.addEventListener('click', nextImage)

// arrowLeft.addEventListener('click', perviousImage)

// document.addEventListener('keydown', (e) => {

//     if (popup.classList.contains !== 'hidden') {
//         if (e.key === "ArrowRight" || e.keyCode === 39) {
//             nextImage()
//         }
//         if (e.key === "ArrowLeft" || e.keyCode === 37) {
//             perviousImage()
//         }
//         if (e.key === "Escape" || e.keyCode === 27) {
//             closePopup()
//         }
//     }

  
// })

// popup.addEventListener('click', (e) => {
//     if(e.target === popup){
//         closePopup()
//     }
// })

hamburgerBtn.addEventListener('click',(e) => {
    if (menuBar.classList.contains('active')){
        menuBar.style.display= "none";
        menuBar.classList.remove('active')
    } else {
   menuBar.classList.add('active')

   menuBar.style.display= "flex";
}
})