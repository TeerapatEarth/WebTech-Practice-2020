var num = 1;
function insert() {
    let table = document.getElementById('table0');
    let row = table.insertRow(-1);
    let cell, text, tnode;
    let checkid = document.getElementById("idstudent").value;
    var checknum = /^[0-9]+$/;
    if(checkid.match(checknum)){
        if(checkid.length != 8){
            alert("กรอกรหัสนักศึกษาไม่ถูกต้อง");
            return false;
        }
    }
    else if (checkid.length == 0){
        alert("โปรดกรอกรหัสนักศึกษา")
        return false;
    }
    else{
        alert("กรอกตัวเลขเท่านั้น");
        return false
    }

    let checkname = document.getElementById("name").value;
    if(checkname.length == 0){
        alert("โปรดกรอกชื่อ");
        return false;
    }
    let checksurname = document.getElementById("surname").value;
    if(checksurname.length == 0){
        alert("โปรดกรอกนามสกุล");
        return false;
    }

    for (let i = 0; i < 4; i++) {
        cell = row.insertCell(-1);
        if(i == 0){
            text = num;
            num++;
            tnode = document.createTextNode(text);
            cell.appendChild(tnode);
        }
        else if (i == 1){
            text = document.getElementById("idstudent").value;
            tnode = document.createTextNode(text);
            cell.appendChild(tnode);
        }
        else if (i == 2){
            text = document.getElementById("name").value;
            tnode = document.createTextNode(text);
            cell.appendChild(tnode);
        }
        else{
            text = document.getElementById("surname").value;
            tnode = document.createTextNode(text);
            cell.appendChild(tnode);
        }
    }
}