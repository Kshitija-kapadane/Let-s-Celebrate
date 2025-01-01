function cursorMove(){
    let parent=document.querySelector("#parent");
    let cursor=document.querySelector(".cursor");

    parent.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    parent.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
    parent.addEventListener("mousemove", function(dets){
        cursor.style.left=dets.x-40+"px";
        cursor.style.top=dets.y-40+"px";
    })
}

cursorMove();