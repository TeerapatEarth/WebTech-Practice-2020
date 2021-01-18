function random(){
    let num1 = Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
    if(num1 < 100000 && num1 > 9999){
        num1 = "0"+num1;
        document.getElementById("num1").innerHTML = num1;
    }
    else if (num1 < 10000 && num1 > 999){
        num1 = "00"+num1;
        document.getElementById("num1").innerHTML = num1;
    }
    else if (num1 < 1000 && num1 > 99){
        num1 = "000"+num1;
        document.getElementById("num1").innerHTML = num1;
    }
    else if (num1 < 100 && num1 > 9){
        num1 = "0000"+num1;
        document.getElementById("num1").innerHTML = num1;
    }
    else if (num1 < 10){
        num1 = "00000"+num1;
        document.getElementById("num1").innerHTML = num1;
    }
    else{
        document.getElementById("num1").innerHTML = num1;
    }

    let num2 = Math.floor(Math.random()*(999 - 0 + 1) + 0);
    if(num2 < 100 && num2 > 9){
        num2 = "0"+num2;
        document.getElementById("num2").innerHTML = num2;
    }
    else if (num2 < 10){
        num4 = "00"+num2;
        document.getElementById("num2").innerHTML = num2;
    }
    else{
        document.getElementById("num2").innerHTML = num2;
    }

    let num3 = Math.floor(Math.random()*(99 - 0 + 1) + 0);
    if (num3 < 10){
        num3 = "0"+num3;
        document.getElementById("num3").innerHTML = num3;
    }
    else{
        document.getElementById("num3").innerHTML = num3;
    }

    let num4 = Math.floor(Math.random()*(999 - 0 + 1) + 0);
    if(num4 < 100 && num4 > 9){
        num4 = "0"+num4;
        document.getElementById("num4").innerHTML = num4;
    }
    else if (num4 < 10){
        num4 = "00"+num4;
        document.getElementById("num4").innerHTML = num4;
    }
    else{
        document.getElementById("num4").innerHTML = num4;
    }
}