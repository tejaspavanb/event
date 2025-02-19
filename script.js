const Box=document.getElementById('Box');
Box.addEventListener("mouseover",function(event){
    event.target.style.backgroundColor="red";
    event.target.textContent="😫 Don't Hit me !"
})
Box.addEventListener("click",function(event){
    event.target.style.backgroundColor="yellow";
    event.target.textContent="WHy did you Hit me ? 😠"
}    
)
Box.addEventListener("mouseout",function(event){
    event.target.style.backgroundColor=" hsl(251, 100%, 18%)";
    event.target.textContent="😊 Come to Me !";
})
top=0;
left=0;
document.addEventListener("keydown",function(event){
    Box.style.backgroundColor="hsl(251, 93.00%, 39.40%)";
    Box.textContent="Yayiii, I can Dance 😍";
    console.log(event.key);
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                top-=10;
                break;
            case "ArrowDown":
                top+=10;
                break;
            case "ArrorLeft":
                left-=10;
                break;
            case "ArrowRight":
                left+=10;
                break;
            
        }
        Box.style.top=top;
        Box.style.left=left;
    }
})
document.addEventListener("keyup",function(event){
    event.target.style.backgroundColor=" hsl(251, 100%, 18%)";
    event.target.textContent="😊 Come to Me !";
})