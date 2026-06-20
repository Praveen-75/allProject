var tl = gsap.timeline();
tl.from("#nav>h4, #nav1>i",{
     opacity : 0,
     stagger : 1,
})
.from("#mid1>h1,p,button",{
     opacity : 0,
     stagger : 1,
})
.from(".circle>h3,h2",{
     opacity : 0,
     stagger : 1,
})
.from("#nav4>i, #nav3>h3",{
     opacity : 0,
     stagger : 1,
})
gsap.from("#point",{
     left:"0%",
     width:"50%",
     y : 50,
     rotate : "-30deg",
     stagger : 1,
     duration: 23
})

gsap.from("#gola,#gola1",{
     y : -800,
     duration: 23
})