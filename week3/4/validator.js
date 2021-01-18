var num = 5;
function change(){
    if (num % 4 == 1){
        document.getElementById("num1").src = "http://10.0.15.12/lab3/images/3.png";
        document.getElementById("num2").src = "http://10.0.15.12/lab3/images/1.png";
        document.getElementById("num3").src = "http://10.0.15.12/lab3/images/4.png";
        document.getElementById("num4").src = "http://10.0.15.12/lab3/images/2.png";
    }
    else if(num % 4 == 2){
        document.getElementById("num1").src = "http://10.0.15.12/lab3/images/4.png";
        document.getElementById("num2").src = "http://10.0.15.12/lab3/images/3.png";
        document.getElementById("num3").src = "http://10.0.15.12/lab3/images/2.png";
        document.getElementById("num4").src = "http://10.0.15.12/lab3/images/1.png";
    }
    else if(num % 4 == 3){
        document.getElementById("num1").src = "http://10.0.15.12/lab3/images/2.png";
        document.getElementById("num2").src = "http://10.0.15.12/lab3/images/4.png";
        document.getElementById("num3").src = "http://10.0.15.12/lab3/images/1.png";
        document.getElementById("num4").src = "http://10.0.15.12/lab3/images/3.png";
    }
    else{
        document.getElementById("num1").src = "http://10.0.15.12/lab3/images/1.png";
        document.getElementById("num2").src = "http://10.0.15.12/lab3/images/2.png";
        document.getElementById("num3").src = "http://10.0.15.12/lab3/images/3.png";
        document.getElementById("num4").src = "http://10.0.15.12/lab3/images/4.png";
    }
    num++;
}