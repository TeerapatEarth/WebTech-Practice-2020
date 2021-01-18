let requestURL = 'movies.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();
function dataReportStatus(data) {
    for (let i = 0; i < 5; i++) {
        if (i < 3) {
            let box = document.getElementById("row1");
            box.innerHTML += "<div class='col-lg-4' style='font-size: 15px;text-align: center;padding: 30px;' id='show'>\
            <img src='"+ data.movies.showing[i].poster + "'>\
            <div style='margin-top: 20px; width: 260px; margin-left:auto;\
            margin-right:auto;'>"+ data.movies.showing[i].title_th + "<br>(" + data.movies.showing[i].title_en + ")\
            <br>"+ data.movies.showing[i].categoty[0] + "<br>" + data.movies.showing[i].releasedate + "<br><button>\
            เช็ครอบภาพยนตร์</button></div>";
        }
        else{
            let box = document.getElementById("row2");
            box.innerHTML += "<div class='col-lg-6' style='font-size: 15px;text-align: center;padding: 30px;' id='show'>\
            <img src='"+ data.movies.showing[i].poster + "'>\
            <div style='margin-top: 20px; width: 260px; margin-left:auto;\
            margin-right:auto;'>"+ data.movies.showing[i].title_th + "<br>(" + data.movies.showing[i].title_en + ")\
            <br>"+ data.movies.showing[i].categoty[0] + "<br>" + data.movies.showing[i].releasedate + "<br><button>\
            เช็ครอบภาพยนตร์</button></div>";
        }
    }
    for(let i = 0; i < 3; i++){
        let box = document.getElementById("row3");
            box.innerHTML += "<div class='col-lg-4' style='font-size: 15px;text-align: center;padding: 30px;' id='show'>\
            <img src='"+ data.movies.comingsoon[i].poster + "'>\
            <div style='margin-top: 20px; width: 260px; margin-left:auto;\
            margin-right:auto;'>"+ data.movies.comingsoon[i].title_th + "<br>(" + data.movies.comingsoon[i].title_en + ")\
            <br>"+ data.movies.comingsoon[i].categoty[0] + "<br>" + data.movies.comingsoon[i].releasedate + "<br><button>\
            เช็ครอบภาพยนตร์</button></div>";
    }
}