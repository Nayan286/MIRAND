function scroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
}
scroll()

function letter() {

    var letter = document.querySelector(".page2 .section7 .letter1")
    var letter2 = document.querySelector(".page2 .section7 .letter2")
    var letter3 = document.querySelector(".page2 .section7 .letter3")
    var letter4 = document.querySelector(".page2 .section7 .letter4")

    letter.addEventListener("mouseover", function () {
        letter2.style.transform = "translateX(44%)"
    })

    letter.addEventListener("mouseleave", function () {
        letter2.style.transform = "translateX(0%)"
    })

    letter.addEventListener("mouseover", function () {
        letter3.style.transform = "translateX(34%)"
    })

    letter.addEventListener("mouseleave", function () {
        letter3.style.transform = "translateX(0%)"
    })

    letter.addEventListener("mouseover", function () {
        letter4.style.transform = "translateX(24%)"
    })

    letter.addEventListener("mouseleave", function () {
        letter4.style.transform = "translateX(0%)"
    })
}
letter()

function letter2() {

    var letter = document.querySelector(".page2 .section7 .letter1")
    var letter2 = document.querySelector(".page2 .section7 .letter2")
    var letter3 = document.querySelector(".page2 .section7 .letter3")
    var letter4 = document.querySelector(".page2 .section7 .letter4")

    letter2.addEventListener("mouseover", function () {
        letter3.style.transform = "translateX(44%)"
    })

    letter2.addEventListener("mouseleave", function () {
        letter4.style.transform = "translateX(0%)"
    })

    letter2.addEventListener("mouseover", function () {
        letter4.style.transform = "translateX(24%)"
    })

    letter2.addEventListener("mouseleave", function () {
        letter3.style.transform = "translateX(0%)"
    })

}
letter2()

function letter3() {

    var letter = document.querySelector(".page2 .section7 .letter1")
    var letter2 = document.querySelector(".page2 .section7 .letter2")
    var letter3 = document.querySelector(".page2 .section7 .letter3")
    var letter4 = document.querySelector(".page2 .section7 .letter4")

    letter3.addEventListener("mouseover", function () {
        letter4.style.transform = "translateX(42%)"
    })

    letter3.addEventListener("mouseleave", function () {
        letter4.style.transform = "translateX(0%)"
    })
}
letter3()

function gsapaniamtion(){
    let tl = gsap.timeline()

    tl.to(".page1",{
        y: "-45vh",
        duration: 0.4,
        delay: 0.6
    })

    tl.to(".page1",{
        duration: 0.5,
        scale: 1,
        rotate: 360,
        delay: 0.3,
        y: "0vh"
    })
}
gsapaniamtion()



// var black = document.querySelector(".main .black");
// var icon = document.querySelector(".page1 .nav .navicon");

// if (black && icon) {
//     icon.addEventListener("mouseover", function () {
//         black.style.transform = "translateY(0%)";,
//     });

//     icon.addEventListener("mouseleave", function () {
//         black.style.transform = "translateY(100%)";
//     });
// } else {
//     console.error("Elements not found. Check your HTML structure.");
// }