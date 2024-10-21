// gsap.from('.box', {
//     x:1000,
//     duration: 2,
//     delay: 1,
//     backgroundColor: 'green',
//     rotate: 360,
//     borderRadius: '50%',
//     scale: 0.5,
// })

// gsap.from('h1',{
//     y:200,
//     duration:1,
//     opacity: 0,
//     delay: 1,
//     stagger: 1,
// })

// gsap.to('.circle', {
//     x: 1000,
//     borderRadius: '0px',
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: 'orange',
//     repeat: -1,
//     yoyo: true
// })

var tl = gsap.timeline()
tl.to('.box1',{
    x:1000,
    duration: 2,
})
tl.to('.box2',{
    x:1100,
    rotate: 360,
    duration: 2,
})
tl.to('.box3',{
    x:1200,
    duration: 2,
})

gsap.from('.page1 .box4', {
    scale: 0,
    rotate: 360,
    duration: 1,
    delay: 1,
})
gsap.from('.page2 .box4', {
    scale: 0,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
        trigger: '.page2 .box4',
        scroller: 'body',
        markers: true,
        start: 'top 50%',
        end: 'top 30%',
        scrub: 2
    }
})
gsap.from('.page3 .box4', {
    x:800,
    scale: 0,
    duration: 4,
    scrollTrigger: {
        trigger: '.page2 .box4',
        scroller: 'body',
        markers: true,
        start: 'top 30%',
        end: 'top 30%',
        scrub: true,
        pin: true
    }
})

// const main = document.getElementsByClassName('.main')
// let scroll = new LocomotiveScroll({
//     el: main,
//     smooth: true,
//     lerp: 0.1
// })

var swiper = new Swiper('.swiper',{
    navigation: {
        nextEl: '.next',
        
    }
})