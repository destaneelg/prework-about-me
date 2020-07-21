document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "999px";
    document.getElementById("box").style.width = "999px";
});       

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});     

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = 0.10;
});   

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").reset = location.reload();

})