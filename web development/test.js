var tl = gsap.timeline();
tl.from("#nav1>h3 , #nav2>i ,#nav2>h3, #nav3>i",{
     opacity : 0,
     // y : 30,
     // delay : 1,
     // duration : 2,
     stagger : 1
})
.from("#ltop1>h5, #ltop2>h4, #top>h4",{
     opacity : 0,
     // delay : 1,
     stagger : 1,
     // duration : 2
})
.from("#lmid>h3 , #rmid>#gola",{
     opacity : 0,
     y : 30,
     // delay : 1,
     stagger : 1,
     // duration : 2
})
.from("#rmid1left>h4, #rmid1right>i, #bleft>h4, #bright>h4",{
     opacity : 0,
     // delay : 1,
     stagger : 1,
     // duration : 2
})
.from("#lbuttom>.circle1",{
     opacity : 0,
     y : 30,
     // delay : 1,
     stagger : 1,
     // duration : 2
})
.from("#btop>h4, #bbuttom>.circle",{
     opacity : 0,
     y : 30,
     // delay : 1,
     stagger : 1,
     // duration : 2
})
.from("#n1>i , #n1>h3 , #n2>i",{
     opacity : 0,
     // delay : 1,
     stagger : 1,
     // duration : 2
})
.from("#n3>h3, #n3>i , #n4>button , #n4>i",{
     opacity : 0,
     // delay : 1,
     stagger : 1,
     // duration : 2
})
.to("#mid>img",{
     opacity : 1,
     x : 900,
     rotate : "400deg",
     duration : 1
})