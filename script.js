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
x=0;
y=0;
movement=10;
document.addEventListener("keydown",function(event){
    Box.style.backgroundColor="hsl(251, 93.00%, 39.40%)";
    Box.textContent="Yayiii, I can Dance 😍";
    
    if(event.key.startsWith("Arrow")){
        console.log(event.key);
        switch(event.key){
            case "ArrowUp":
                y-=movement;
                break;
            case "ArrowDown":
                y+=movement;
                break;
            case "ArrowLeft":
                x-=movement;
                break;
            case "ArrowRight":
                x+=movement;
                break;
         
        }
        console.log(Box.style.top,Box.style.left);
        Box.style.top=y+"px";
        Box.style.left=x+"px"; 
        
    }
})
document.addEventListener("keyup",function(event){
    Box.style.backgroundColor=" hsl(251, 100%, 18%)";
    Box.textContent="😊 Come to Me !";
})