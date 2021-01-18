let requestURL = 'tutor.json'; 
    let request = new XMLHttpRequest(); 
    request.onreadystatechange = function () { 
        if (request.readyState == 4 && request.status == 200) {
            dataReportStatus(JSON.parse(request.responseText));
        } }; 
    request.open("GET", requestURL, true); 
    request.send(); 
    
    function dataReportStatus(data) { 
        let box = document.getElementById("box");
        box.innerHTML += "<div class='row'><div class='col-lg-2'></div><div class='col-lg-3'id='name'></div>\
        <div class='col-lg-6' id='info' style='background-color: #A3C6C4; padding : 20px;border-radius: 20px 20px 20px 20px;'></div></div>"
        let insertname = document.getElementById("name");
        for (let i = 0 ; i < data.length; i++){
            if(i % 2 == 0){
                insertname.innerHTML += "<button id ='boxname"+i+"'style='padding: 20px;\
                border: 1px solid white; font-size: 20px; width: 250px'><p><a href='#name"+i+"'>"+data[i].firstname + " "+data[i].lastname+"</a></p>\
                </button><br>";
            }
            else{
                insertname.innerHTML += "<button id='boxname"+i+"'style='padding: 20px;\
                border: 1px solid white; font-size: 20px; width: 250px;'><p><a href='#name"+i+"'>"+data[i].firstname + " "+data[i].lastname+"</a></p>\
                </button><br>";
            }
        }
        let insertinfo = document.getElementById("info");
        for(let i = 0; i < data.length;i++){
            insertinfo.innerHTML += "<div id='name"+i+"' style='background-color : #6C7A89; font-size: 30px; color: white; margin-top: 20px;\
            padding: 20px; border-radius: 20px 20px 20px 20px;'>"+data[i].firstname+" "+data[i].lastname+"</div>";
            insertinfo.innerHTML += "<div style='margin-left : 30px; margin-top: 20px;'>Age : "+data[i].age+"<br><br>Tel : "+data[i].tel+"<br><br>Subject : <br>";
            for(let j = 0; j < data[i].subject.length;j++){
                insertinfo.innerHTML += "<ul><ul><ul><li>"+data[i].subject[j]+"</li></ul></ul></ul>"
            }
        }
    }