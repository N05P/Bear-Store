let a = document.querySelector("#part2");

a.addEventListener("mouseenter",function(){
    gsap.to("#part2 .firstimg",{
    transform:"translate3d(-20vw, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    opacity:0,
    rotate:-20,
    ease:"power2.in"
    })
    gsap.to("#part2 .secondimg",{
        transform:"translate3d(0.9vw, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        opacity:1,
        ease:"power2.in",
        rotate:0
    })    
})
a.addEventListener("mouseleave",function(){
    gsap.to("#part2 .firstimg",{
    transform:"translate3d(1vw, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    duration:1,
    opacity:1,
    rotate:0,
    ease:"power2.in"

    })
    gsap.to("#part2 .secondimg",{
        transform:"translate3d(20vw, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        duration:1,
        opacity:0,
        rotate:10,
        ease:"power2.in"
    })    
})
