function change(){
    let color = document.forms["myForm"]["code"].value;
    if(color.length == 7){
        document.querySelector(".box1").style = "background-color: "+color;
        document.querySelector(".box2").style = "background-color: "+color; 
        document.querySelector(".box3").style = "background-color: "+color; 
    }
}