
function clock(){

const currentDate=new Date();
var hr=currentDate.getHours();
var mins=currentDate.getMinutes();
var sec=currentDate.getSeconds();
if(hr<10)
    hr="0"+hr;
if(mins<10)
    mins="0"+mins;
if(sec<10)
    sec="0"+sec;
document.getElementById('hour').innerHTML=hr;
document.getElementById('minute').innerHTML=":"+mins;
document.getElementById('second').innerHTML=":"+sec;
}
setInterval(clock,1000);
