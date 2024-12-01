

audio.z.onmousemove = function(){
  if(audio.f == true){
    t3.style=" left:calc("+audio1()+"% - 4px);";
    audio3();
  }
  if(audio.i == true){
    v2.style=" left:calc("+audio2()+"% - 4px);";
    audio4();
  }
}

audio.z.onmouseup = function(){

if(audio.f == true){
//audio5();
audio.f = false;
t3.style.display="none";
}

if(audio.i == true){
//audio6();
audio.i = false;
v2.style.display="none";
}

}








audio.a.onmouseout = function(){
if(audio.f == false){
t3.style.display="none";
}}

audio.a.onmousedown = function(){
audio.f = true;
t3.style="left:calc("+audio1()+"% - 4px);";
audio3();
}


audio.e.onmouseout = function(){
if(audio.i == false){
v2.style.display="none";
}}

audio.e.onmousedown = function(){
audio.i = true;
v2.style="left:calc("+audio2()+"% - 4px);";
audio4();
}



audio.a.onmousemove = function(){t3.style.display="block"}
audio.e.onmousemove = function(){v2.style.display="block"}



/*
s.onmousemove = function(){
var t = s.getBoundingClientRect();
c.innerHTML = (event.clientX - t.left) + "  " + t.left + "  " + t.right;
}
*/

var audio = {};

audio.a = document.getElementById("t0");
audio.b = document.getElementById("t1");
audio.c = document.getElementById("t2");
audio.d = document.getElementById("t3");
audio.f = false;


audio.e = document.getElementById("v0");
audio.g = document.getElementById("v1");
audio.w = document.getElementById("v2");
audio.i = false;



audio.z = document.body;




function audio3(){
a = audio1();
t2.style.width = a+"%";
}
function audio4(){
a = audio2();
v1.style.width = a+"%";
}

function audio2(){
var a = document.getElementById('v0').offsetWidth;
var b = v0.getBoundingClientRect();
var c = (event.clientX - b.left);
var d = 100/(a/c);
if(d<0){d=0}
if(d>100){d=100}
return d;
}

function audio1(){
var a = document.getElementById('t0').offsetWidth;
var b = t0.getBoundingClientRect();
var c = (event.clientX - b.left);
var d = 100/(a/c);
if(d<0){d=0}
if(d>100){d=100}
return d;
}