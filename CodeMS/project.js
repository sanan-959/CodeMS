gsap.from(".nav",{
    opacity:0,
    y:20,
    duration:1.2,
})
gsap.from(".left",{
    opacity: 0,
    x: -70,
    duration: 1.2,
    stagger:1,
})
gsap.from(".right",{
    opacity: 0,
    duration: 1.2,
    scale:-0.1
})