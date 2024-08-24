TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from("ul li", 1, {
    opacity: 0,
    x: -70,
    ease: Expo.easeInOut
}, 0.02)
TweenMax.from(".text", 2, {
    opacity: 0,
    x: -70,
    ease: Expo.easeInOut
})
TweenMax.from(".content h1", 2, {
    opacity: 0,
    x: -70,
    ease: Expo.easeInOut
})
TweenMax.from(".content button", 3, {
    opacity: 0,
    x: -70,
    ease: Expo.easeInOut
})
TweenMax.from(".shape", 2, {
    opacity: 0,
    y: -700,
    ease: Expo.easeInOut,
    delay: 0.5
})
TweenMax.from(".image img", 1, {
    opacity: 0,
    y: 400,
    ease: Expo.easeInOut,
    delay: 2
})

let moon = document.querySelector(".ri-moon-line");
let body = document.querySelector("body");

moon.addEventListener("click", () => {
    if(moon.getAttribute('class') === "ri-sun-line"){
        moon.setAttribute('class', 'ri-moon-line');
        body.classList.remove('active');
    } else {
        moon.setAttribute('class', 'ri-sun-line');
        body.classList.add('active');
    }
})