function cal(){
    var num1 = document.getElementById("val1").value;
    var num2 = document.getElementById("val2").value;
    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    document.getElementById("result").innerHTML = "Result : "+(n1 + n2);
    var la = document.createElement("label");
    var newline = document.createElement("br");
    la.innerHTML = num1+" + "+num2+" = "+ " "+(n1+n2);
    let parent = document.getElementById("history");
    parent.appendChild(la);
    parent.appendChild(newline);
}