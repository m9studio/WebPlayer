var audio = {};
audio.a = document.body;
audio.a.onmousemove = function(){
    if(audio.d == true){
        audio_player_track_slider3.style="left:calc("+audio.f.a(1)+"% - 4px);";
        audio.f.b(1);
    }
    if(audio.e == true){
        audio_player_volume_slider2.style="left:calc("+audio.f.a(2)+"% - 4px);";
        audio.f.b(2);
        audio.m.b(audio.f.a(2));
    }
}
audio.a.onmouseup = function(){
    if(audio.d == true){
        audio.m.c(audio.f.a(1));
        audio.d = false;
        audio_player_track_slider3.style.display="none";
    }
    if(audio.e == true){
        audio.m.b(audio.f.a(2));
        audio.e = false;
        audio_player_volume_slider2.style.display="none";
    }
}
audio.b = document.getElementById("audio_player_track_slider");
audio.d = false;
audio.b.onmousemove = function(){audio_player_track_slider3.style.display="block"}
audio.b.onmouseout = function(){if(audio.d == false){audio_player_track_slider3.style.display="none";}}

audio.b.onmousedown = function(){
    audio.d = true;
    audio_player_track_slider3.style="left:calc("+audio.f.a(1)+"% - 4px);";
    audio.f.b(1);
}
audio.c = document.getElementById("audio_player_volume_slider");
audio.e = false;
audio.c.onmousemove = function(){audio_player_volume_slider2.style.display="block"}
audio.c.onmouseout = function(){if(audio.e == false){audio_player_volume_slider2.style.display="none";}}

audio.c.onmousedown = function(){
    audio.e = true;
    audio_player_volume_slider2.style="left:calc("+audio.f.a(2)+"% - 4px);";
    audio.f.b(2);
}
audio.f = {};
audio.f.a = function(i){
    if(i==2){
        a = document.getElementById('audio_player_volume_slider').offsetWidth;
        b = audio_player_volume_slider.getBoundingClientRect();
    }
    if(i==1){
        a = document.getElementById('audio_player_track_slider').offsetWidth;
        b = audio_player_track_slider.getBoundingClientRect();
    }
    c = (event.clientX - b.left);
    d = 100/(a/c);
    if(d<0){d=0}
    if(d>100){d=100}
    return d;
}
audio.f.b = function(i){
    a = audio.f.a(i);
    if(i==2){audio_player_volume_slider1.style.width = a+"%";}
    if(i==1){audio_player_track_slider2.style.width = a+"%";}
}







audio.f.x = function(){
    audio.m.b(audio.v.f);
    audio_player_volume_slider1.style.width = audio.v.f+"%";
    audio_player_volume_slider2.style="left:calc("+audio.v.f+"% - 4px);";
    audio_player_volume_slider2.style.display="none";
}





audio.m={};
audio.m.a=function(){
    audio_player.src=audio.v.a[audio.v.b];
    in1.innerHTML=audio.v.a1[audio.v.b];
    in2.innerHTML=audio.v.a2[audio.v.b];
    audio_player.play();
    audio_player_play.style="background-image: url(style/assets/1.svg);";
}

audio.m.b=function(a){
    audio.v.f=a;
    b = a/100;
    audio_player.volume=b;
    audio_player_value_text.innerHTML=Math.floor(a)+"%";
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
        if(audio.v.g == false){
            audio.g.c.onclick();
        }else{
            audio_player.currentTime=0;
            audio_player.play();
        }
    }else{
        if(audio.d == false){
            audio_player_track_slider2.style.width=a+"%";
            audio_player_track_slider3.style.left = "calc("+a+"% - 4px)";
            audio_player_track_text.innerHTML=Math.floor(audio.v.e/60) + ":" + Math.floor(audio.v.e - (Math.floor(audio.v.e/60)*60));
            //t3.style.display="none";
        }
    }
}







//кнопки контроля
audio.g={};
audio.g.a = document.getElementById("audio_player_play");
audio.g.a.onclick = function(){audio.f.x();
    if(audio_player.paused==true){
        if(audio_player.src==""){
            audio.m.a();
        }
        audio_player.play();
        audio_player_play.style="background-image: url(style/assets/1.svg);";
    }else{
        audio_player.pause();
        audio_player_play.style="background-image: url(style/assets/0.svg);";
    }
}

audio.g.b = document.getElementById("audio_player_prev");
audio.g.b.onclick = function(){audio.f.x();
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

audio.g.c = document.getElementById("audio_player_next");
audio.g.c.onclick = function(){audio.f.x();
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



audio.g.d = document.getElementById("audio_player_repet_off");
audio.g.d.onclick = function(){
    if(audio.v.g == false){
        audio.v.g = true;
        audio_player_repet_on.style.display="block";
    }else{
        audio.v.g = false;
        audio_player_repet_on.style.display="none";
    }
}






//переменные
audio.v={};
//массив с сылками на музыку
audio.v.a = ["data/1.mp3","data/2.mp3","data/3.mp3","data/4.mp3"];
//название музыки
audio.v.a1 = ["войны ютуберов","Overlord #1","Overlord #2","Overlord #3"];
//автор музыки
audio.v.a2 = ["Demaster","Opening","Opening","Opening"];
//какая мелодия играет
audio.v.b = 0;

//кол-во секунд в музыке
audio.v.c = 0;
//кол-во загруженных секунд
audio.v.d = 0;
//кол-во проигранных секунд
audio.v.e = 0;

//повтор аудиозаписи
audio.v.g = false;


//громкость
audio.v.f = 50;












