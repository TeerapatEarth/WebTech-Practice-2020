var song1 = 0;
var song2 = 0;
var song3 = 0;
var song4 = 0;
function addsong1() {
    if (song1 == 0) {
        document.getElementById("playlist").innerHTML += "<div class='boxlist'>\
     <div><img src='song1.jfif' class='imglist'></div> <div class ='songlist'> <h4 id='h4song'>It's Time</h4>\
     <p>Imagine Dragons - It's Time</p> <p style='color: red;'>Night Visions 2012</p></div>";
        song1++;
    }
}

function addsong2() {
    if (song2 == 0) {
        document.getElementById("playlist").innerHTML += "<div class='boxlist'>\
    <div><img src='song2.jfif' class='imglist'></div> <div class ='songlist'><p>Goodbyes</p>\
    <p>Post Malone - Goodbyes</p> <p style='color: red;'>Hollywood's Bleeding 2019</p></div></div>";
        song2++;
    }
}

function addsong3() {
    if (song3 == 0) {
        document.getElementById("playlist").innerHTML += "<div class='boxlist'>\
    <div><img src='song3.jfif' class='imglist'></div> <div class ='songlist'> <h4 id='h4song'>Lane Boy</h4> <p>twenty one pilots: Lane Boy</p>\
    <p style='color: red;'>Blurryface 2015</p></div></div>";
        song3++;
    }
}

function addsong4() {
    if (song4 == 0) {
        document.getElementById("playlist").innerHTML += " <div class='boxlist'><div><img src='song4.jfif' class='imglist'></div>\
        <div class ='songlist'><h4 id='h4song'>Beautiful People</h4><p>Ed Sheeran - Beautiful People</p>\
        <p style='color: red;'>No.6 Collaborations Project 2019</p></div></div>";
        song4++;
    }
}