var reply1 = 0;
var reply2 = 0;
var reply3 = 0;
function reply(button) {
    let check = document.getElementById(button);
    if (button == 'reply1') {
        if (reply1 == 0) {
            reply1++;
            reply2 = 0;
            reply3 = 0;
            check.style = "background-color : red; color: white;";
            document.getElementById('reply2').style = "class='button'";
            document.getElementById('reply3').style = "class='button'";
        }
        else if(reply1 == 1) {
            reply1--;
            check.style = "class='button";
        }
    }
    else if (button == 'reply2') {
        if (reply2 == 0) {
            reply1 = 0;
            reply2++;
            reply3 = 0;
            check.style = "background-color : red; color: white;";
            document.getElementById('reply1').style = "class='button'";
            document.getElementById('reply3').style = "class='button'";
        }
        else if(reply2 == 1) {
            reply2--;
            check.style = "class='button'";
        }
    }
    else {
        if (reply3 == 0) {
            reply1 = 0;
            reply2 = 0;
            reply3++;
            check.style = "background-color : red ; color: white;";
            document.getElementById('reply1').style = "class='button'";
            document.getElementById('reply2').style = "class='button'";
        }
        else if(reply3 == 1){
            reply3--;
            check.style = "class='button'";
        }
    }
}

function send() {
    var text = document.getElementById("mes").value;
    if(text.length == 0){
        alert("กรุณาใส่คำตอบ");
        return false;
    }
    if(reply1 == 0 && reply2 == 0 && reply3 == 0){
        alert("กรุณาเลือกข้อที่ต้องการตอบ");
        return false;
    }
    if (reply1 == 1 && reply2 == 0 && reply3 == 0) {
        var list = document.createElement("li");
        let txt = document.createTextNode(text);
        list.appendChild(txt);
        document.getElementById("ans1").appendChild(list);
        document.getElementById("boxsent").innerHTML = "<input id='mes'placeholder='reply'>\
        <button class='buttonsend' onclick='send()'>send</button>";
        document.getElementById('reply1').style = "class='button'";
        reply1 = 0;
    }
    else if(reply1 == 0 && reply2 == 1 && reply3 == 0){
        var list = document.createElement("li");
        let txt = document.createTextNode(text);
        list.appendChild(txt);
        document.getElementById("ans2").appendChild(list);
        document.getElementById("boxsent").innerHTML = "<input id='mes'placeholder='reply'>\
        <button class='buttonsend' onclick='send()'>send</button>";
        document.getElementById('reply2').style = "class='button'";
        reply2 = 0;
    }
    else if(reply1 == 0 && reply2 == 0 && reply3 == 1){
        var list = document.createElement("li");
        let txt = document.createTextNode(text);
        list.appendChild(txt);
        document.getElementById("ans3").appendChild(list);
        document.getElementById("boxsent").innerHTML = "<input id='mes'placeholder='reply'>\
        <button class='buttonsend' onclick='send()'>send</button>"
        document.getElementById('reply3').style = "class='button'";
        reply3 = 0;
    }
}