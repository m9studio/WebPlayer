var audio = {};
audio.a = document.body;
audio.a.onmousemove = function(){
    if(audio.d == true){
        t3.style="left:calc("+audio.f.a(1)+"% - 4px);";
        audio.f.b(1);
    }
    if(audio.e == true){
        v2.style="left:calc("+audio.f.a(2)+"% - 4px);";
        audio.f.b(2);
        audio.m.b(audio.f.a(2));
    }
}
audio.a.onmouseup = function(){
    if(audio.d == true){
        audio.m.c(audio.f.a(1));
        audio.d = false;
        t3.style.display="none";
    }
    if(audio.e == true){
        audio.e = false;
        v2.style.display="none";
    }
}
audio.b = document.getElementById("t0");
audio.d = false;
audio.b.onmousemove = function(){t3.style.display="block"}
audio.b.onmouseout = function(){if(audio.d == false){t3.style.display="none";}}

audio.b.onmousedown = function(){
    audio.d = true;
    t3.style="left:calc("+audio.f.a(1)+"% - 4px);";
    audio.f.b(1);
}
audio.c = document.getElementById("v0");
audio.e = false;
audio.c.onmousemove = function(){v2.style.display="block"}
audio.c.onmouseout = function(){if(audio.e == false){v2.style.display="none";}}

audio.c.onmousedown = function(){
    audio.e = true;
    v2.style="left:calc("+audio.f.a(2)+"% - 4px);";
    audio.f.b(2);
}
audio.f = {};
audio.f.a = function(i){
    if(i==2){
        a = document.getElementById('v0').offsetWidth;
        b = v0.getBoundingClientRect();
    }
    if(i==1){
        a = document.getElementById('t0').offsetWidth;
        b = t0.getBoundingClientRect();
    }
    c = (event.clientX - b.left);
    d = 100/(a/c);
    if(d<0){d=0}
    if(d>100){d=100}
    return d;
}
audio.f.b = function(i){
    a = audio.f.a(i);
    if(i==2){v1.style.width = a+"%";}
    if(i==1){t2.style.width = a+"%";}
}







audio.f.x = function(){
    audio.m.b(audio.v.f);
    v1.style.width = audio.v.f+"%";
    v2.style="left:calc("+audio.v.f+"% - 4px);";
    v2.style.display="none";
}





audio.m={};
audio.m.a=function(){
    audio_player.src=audio.v.a[audio.v.b];
    audio_player.play();
}

audio.m.b=function(a){
    audio.v.f=a;
    b = a/100;
    audio_player.volume=b;
}

audio.m.c=function(a){
    b = audio.v.c/(100/a);
    audio_player.currentTime = b;
}



audio.m.z = document.getElementById("audio_player");
audio.m.z.ontimeupdate=function(){
    audio.v.c=audio_player.duration;
    audio.v.e=audio_player.currentTime;
    a=((audio.v.e/audio.v.c)*100);
    if(a==100){
        audio.g.c.onclick();
    }else{
        if(audio.d == false){
            t2.style.width=a+"%";
            t3.style.left = "calc("+a+"% - 4px)";
            //t3.style.display="none";
        }
    }
}







//кнопки контроля
audio.g={};
audio.g.a = document.getElementById("b0");
audio.g.a.onclick = function(){
    if(audio_player.paused==true){
        if(audio_player.src==""){
            audio.m.a();
        }
        audio_player.play();
        b0.style="background-image: url(assets/1.svg);";
    }else{
        audio_player.pause();
        b0.style="background-image: url(assets/0.svg);";
    }
}

audio.g.b = document.getElementById("b1");
audio.g.b.onclick = function(){
    if(audio.v.a.length>1){
        if(audio.v.b==0){
            audio.v.b=audio.v.a.length-1;
        }else{
            audio.v.b--;
        }
    }else{
        audio.v.b=0;
    }
audio.m.a();
}

audio.g.c = document.getElementById("b2");
audio.g.c.onclick = function(){
    if(audio.v.a.length>1){
        if(audio.v.b==(audio.v.a.length-1)){
            audio.v.b=0;
        }else{
            audio.v.b++;
        }
    }else{
        audio.v.b=0;
    }
audio.m.a();
}


//переменные
audio.v={};
//массив с сылками на музыку
audio.v.a = ["data/1.mp3"];
//какая мелодия играет
audio.v.b = 0;

//кол-во секунд в музыке
audio.v.c = 0;
//кол-во загруженных секунд
audio.v.d = 0;
//кол-во проигранных секунд
audio.v.e = 0;

//громкость
audio.v.f = 50;




/*

audio_player.ontimeupdate=function(){
audio.v.c=audio_player.duration;
audio.v.e=audio_player.currentTime;
a=((audio.v.e/audio.v.c)*100);
t2.style.width=a+"%";
}

*/









//подключаемые модули

audio.f.x();





