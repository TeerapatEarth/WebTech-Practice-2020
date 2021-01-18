var turn = 0;
var ox = "x";
var box1 ="";
var box2 ="";
var box3 ="";
var box4 ="";
var box5 ="";
var box6 ="";
var box7 ="";
var box8 ="";
var box9 ="";

function check(){
    if(box1 == box2 && box1 == box3 && box1 != ""){
        document.getElementById("numturn").innerHTML = "Player "+box1+" Win!!!";
        return false;
    }
    if(box4 == box5 && box4 == box6 && box4 !=""){
        document.getElementById("numturn").innerHTML = "Player "+box4+" Win!!!";
        return false;
    }
    if(box7 == box8 && box7 == box9 && box7 !=""){
        document.getElementById("numturn").innerHTML = "Player "+box7+" Win!!!";
        return false;
    }
    if(box1 == box4 && box1 == box7 && box1 !=""){
        document.getElementById("numturn").innerHTML = "Player "+box1+" Win!!!";
        return false;
    }
    if(box2 == box5 && box2 == box8 && box2 !=""){
        document.getElementById("numturn").innerHTML = "Player "+box2+" Win!!!";
        return false;
    }
    if(box3 == box6 && box3 == box9 && box3 !=""){
        document.getElementById("numturn").innerHTML = "Player "+box3+" Win!!!";
        return false;
    }
    if(box1 == box5 && box1 == box9 && box1 !=""){
        document.getElementById("numturn").innerHTML = "Player "+box1+" Win!!!";
        return false;
    }
    if(box3 == box5 && box3 == box7 && box3 !=""){
        document.getElementById("numturn").innerHTML = "Player "+box3+" Win!!!";
        return false;
    }
    if(turn == 9){
        document.getElementById("numturn").innerHTML = "Draw!!!";
    }

}
function put1(){
    if(document.getElementById("box1").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box1").innerHTML = "x";
            box1 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box1").innerHTML = "o";
            box1 = "o";
        }
        check();
    }
}
function put2(){
    if(document.getElementById("box2").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box2").innerHTML = "x";
            box2 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box2").innerHTML = "o";
            box2 = "o";
        }
        check();
    }
}
function put3(){
    if(document.getElementById("box3").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box3").innerHTML = "x";
            box3 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box3").innerHTML = "o";
            box3 = "o";
        }
        check();
    }
}
function put4(){
    if(document.getElementById("box4").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box4").innerHTML = "x";
            box4 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box4").innerHTML = "o";
            box4 = "o";
        }
        check();
    }
}
function put5(){
    if(document.getElementById("box5").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box5").innerHTML = "x";
            box5 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box5").innerHTML = "o";
            box5 ="o";
        }
        check();
    }
}
function put6(){
    if(document.getElementById("box6").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box6").innerHTML = "x";
            box6 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box6").innerHTML = "o";
            box6 = "o";
        }
        check();
    }
}
function put7(){
    if(document.getElementById("box7").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box7").innerHTML = "x";
            box7 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box7").innerHTML = "o";
            box7 = "o";
        }
        check();
    }
}
function put8(){
    if(document.getElementById("box8").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box8").innerHTML = "x";
            box8 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box8").innerHTML = "o";
            box8 = "o";
        }
        check();
    }
}
function put9(){
    if(document.getElementById("box9").innerHTML == "" && document.getElementById("numturn").innerHTML == "Turn : "+ox){
        turn+=1;
        if (turn %2 != 0){
            ox = "o";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box9").innerHTML = "x";
            box9 = "x";
        }
        else{
            ox = "x";
            document.getElementById("numturn").innerHTML = "Turn : "+ox;
            document.getElementById("box9").innerHTML = "o";
            box9 = "o";
        }
        check();
    }
}