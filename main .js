//====setinterval====//
var mouse =setInterval(myfun,1000);
function myfun (){
    var b =new Date();
    document.querySelector("#demo").innerHTML = b.toLocaleTimeString();
}
//====setinterval====//



//document.querySelector("#demo").innerHTML = window.location.href;
///document.querySelector("#demo").innerHTML = window .location.protocol;
//document.querySelector("#demo").innerHTML = window .location.port;
////document.querySelector("#demo").innerHTML = window .location.hostname;
///document.querySelector("#demo").innerHTML = window .location.platform;
///document.querySelector("#demo").innerHTML = window .location.language;
///document.querySelector("#demo").innerHTML = window .location.appVeriom;
///document.querySelector("#demo").innerHTML = window .location.appName;



function changePage(){
    window.location.href ="file:///D:/full%20stack/front%20end/js/lec%2023/index%20.html";
}
