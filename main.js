var image=1
function next(){
    image=image+1
    if (image>4){
        image=1
    }
    document.getElementById("mom").innerHTML="<image src='Monkey_0"+image+".png'></image>"
}