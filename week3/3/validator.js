function validateForm() {
    let id = document.forms["myForm"]["idnum"].value;
    var num = /^[0-9]+$/;
    if(id.match(num)){
        if(id.length != 13){
            alert("ระบุเลขไม่ถูกต้อง");
            return false;
        }
    }
    else if (id.length == 0){
        alert("โปรดระบุเลขประชาชน");
        return false;
    }
    else{
        alert("ระบุตัวเลขเท่านั้น");
        return false;
    }


    let textname = document.forms["myForm"]["provincename"].value;
    if (textname == "เลือกคำนำหน้า" ) {
        alert("โปรดเลือกคำนำหน้า");
        return false;
    }


    let name = document.forms["myForm"]["idname"].value;
    if (name.length == 0){
        alert("โปรดระบุชื่อ");
        return false;
    }
    else if (name.length > 30){
        alert("ระบุชื่อไม่ถูกต้อง");
        return false;
    }
    else{
        if(name.match(num)){
            alert("ระบุชื่อเป็นตัวอักษรเท่านั้น");
            return false;
        }
    }


    let surname = document.forms["myForm"]["idsurname"].value;
    if (surname.length == 0){
        alert("โปรดระบุนามสกุล");
        return false;
    }
    else if (surname.length > 30){
        alert("ระบุนามสกุลไม่ถูกต้อง");
        return false;
    }
    else{
        if(surname.match(num)){
            alert("ระบุนามสกุลเป็นตัวอักษรเท่านั้น");
            return false;
        }
    }


    let address = document.forms["myForm"]["address"].value.split('\n');
    if (address.length < 2) {
        alert("โปรดระบุข้อความ 2 บรรทัด");
        return false;
    }
    for (var i = 0; i < address.length; i++) {
        if (address[i].length < 5) {
            alert("ควรมีมากกว่า 5 ตัวอักษรในแต่ละบรรทัด");
            return false;
        }
    }


    let tambon = document.forms["myForm"]["idtambon"].value;
    if (tambon.length < 2){
        alert("โปรดระบุตำบล");
        return false;
    }
    else{
        if(tambon.match(num)){
            alert("ระบุตำบลเป็นตัวอักษรเท่านั้น");
            return false;
        }
    }


    let district = document.forms["myForm"]["idDistrict"].value;
    if (district.length == 0){
        alert("โปรดระบุอำเภอหรือแขวง");
        return false;
    }
    else{
        if(district.match(num)){
            alert("ระบุอำเภอหรือแขวงเป็นตัวอักษรเท่านั้น");
            return false;
        }
    }


    let city = document.forms["myForm"]["provincecity"].value;
    if (city == "เลือกจังหวัด..." ) {
        alert("โปรดเลือกจังหวัด");
        return false;
    }


    let post = document.forms["myForm"]["idpost"].value;
    if(post.match(num)){
        if(post.length != 5){
            alert("ระบุรหัสไปรษณีย์ไม่ถูกต้อง");
            return false;
        }
    }
    else if (post.length == 0){
        alert("โปรดระบุรหัสไปรษณีย์");
        return false;
    }
    else{
        alert("ระบุรหัสไปรษณีย์ไม่ถูกต้อง");
        return false;
    }

    let tel = document.forms["myForm"]["idtel"].value;
    if(tel.match(num)){
        if(tel.length < 9 || tel.length > 10){
            alert("ระบุเลขโทรศัพท์ไม่ถูกต้อง");
            return false;
        }
        else{
            alert("Mission Complete!!")
            return false;
        }
    }
    else if (tel.length == 0){
        alert("โปรดระบุหมายเลขโทรศัพท์");
        return false;
    }
    else{
        alert("ระบุเลขโทรศัพท์ไม่ถูกต้อง");
        return false;
    }
}