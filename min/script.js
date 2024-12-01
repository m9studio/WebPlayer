function onLoad(){
    let root = createElement(document.body, "div");
    let header = createElement(root, "div", ["header"]);
    let list = createElement(root, "div", ["list"]);



    let buttonBack = createElement(header, "div", ["header-button"], {"click": function(){
        if(track.Audio.currentTime > 1.5){
            track.Audio.currentTime = 0;
        }else{
            if(trackI > 0){
                trackI--;
            }else{
                trackI = trackList.length - 1;
            }
            trackList[trackI].Icon.click();
        }
    }});
    createElement(buttonBack, "div", ["icon-back"]);



    let buttonPlay = createElement(header, "div", ["header-button", "header-button-play"], {"click": function(){
        if(track.Audio.paused){
            track.Audio.play();
        }else{
            track.Audio.pause();
        }
    }});
    let buttonPlayIcon = createElement(buttonPlay, "div", ["icon-play"]);



    let buttonNext = createElement(header, "div", ["header-button"], {"click": function(){
        if(trackI + 1 == trackList.length){
            trackI = 0;
        }else{
            trackI++;
        }
        trackList[trackI].Icon.click();
    }});
    createElement(buttonNext, "div", ["icon-next"]);




    let trackRepeat = 0;
    let trackI = 0;
    let track = new TrackHeader(header);

    track.Audio.onpause = function(){
        buttonPlayIcon.classList.remove("icon-pause");
        buttonPlayIcon.classList.add("icon-play");
    }
    track.Audio.onplay = function(){
        buttonPlayIcon.classList.remove("icon-play");
        buttonPlayIcon.classList.add("icon-pause");
    }


    
    let trackList = [];


    track.Audio.onended = function(){
        if(trackRepeat == 2){
            track.Audio.play();
        }else{
            if(trackI + 1 == trackList.length){
                if(trackRepeat == 1){
                    trackI = 0;
                    trackList[trackI].Icon.click();
                }
                else{
                    track.Audio.pause();
                }
            }else{
                trackI++;
                trackList[trackI].Icon.click();
            }
        }
    }

    trackList.push(new TrackItem(list, trackListJSON[0], track, true));
    trackList.push(new TrackItem(list, trackListJSON[1], track, false));
    trackList.push(new TrackItem(list, trackListJSON[2], track, false));
    trackList.push(new TrackItem(list, trackListJSON[3], track, false));

    trackList[trackI].click();
    track.Audio.volume = 0.1;
    //track0.Audio.playbackRate = 0 - 16; //скорость
}









function createElement(nodeParent, nodeName, style = [], event = {}){
    let node = document.createElement(nodeName);
    for(let i in style){
        node.classList.add(style[i]);
    }
    for(let i in event){
        node.addEventListener(i, event[i]);
    }
    if(nodeParent != null){
        nodeParent.appendChild(node);
    }
    return node;
}





class TrackNode{
    constructor(parent) {
        this.Node = createElement(null, "div", ["track"]);
        this.Icon = createElement(this.Node, "div", ["track-icon"]);

        this.Title = createElement(this.Node, "div", ["track-title"]);

        this.TitleName = createElement(this.Title, "div", ["track-title-name"]);
        this.TitleArtist = createElement(this.Title, "div", ["track-title-artist"]);
        this.TitleTime = createElement(this.Title, "div", ["track-title-time"]);

        this.Line = createElement(this.Node, "div", ["track-line"]);
        this.LineLoad = createElement(this.Line, "div", ["track-line-load"]);
        this.LineNow = createElement(this.Line, "div", ["track-line-now"]);
        this.LineCircle = createElement(this.LineNow, "div", ["track-line-circle"]);
        parent.appendChild(this.Node);
    }
}





class TrackHeader extends TrackNode{
    constructor(parent) {
        super(parent);
        this.Audio = createElement(null, "audio");
    }
}

class TrackItem extends TrackNode{
    constructor(parent, trackItemJSON, trackHeader, active = false) {
        super(parent);

        this.JSON = trackItemJSON;
        this.Header = trackHeader;

        this.Icon.style.cursor = "pointer";
        this.Icon.addEventListener("click", this._click);

        this.TitleName.innerHTML = this.JSON.name;
        this.TitleArtist.innerHTML = this.JSON.artist;
        this.TitleTime.innerHTML = this.JSON.time;
        this.Line.style.display = "none";

        if(active){
            this.Header.Now = this;
        }

        this.Icon.item = this;
    }
    click(){
        this.__click(this);
    }
    _click(){
        let item = this.item;
        item.__click(item);
        item.Header.Audio.play();
    }
    __click(item){
        item.Header.TitleName.innerHTML = item.JSON.name;
        item.Header.TitleArtist.innerHTML = item.JSON.artist;
        item.Header.TitleTime.innerHTML = 0;

        item.Header.Now.TitleTime.innerHTML = item.Header.Now.JSON.time;
        item.Header.Now.Line.style.display = "none";
        item.Header.Audio.src = item.JSON.file;
        item.Header.Now.LineNow.style.width = "";
        item.Header.LineNow.style.width = "";

        item.Header.Now = item;
        item.Header.Now.TitleTime.innerHTML = 0;
        item.Header.Now.Line.style.display = "";


        
        item.Header.Audio.ontimeupdate = function(){
            let i = ((item.Header.Audio.currentTime / item.Header.Audio.duration) * 100) + "%";
            let t = item.Header.Audio.currentTime;
            t = t - t % 1;
            let mt = (t % 60);
            t = ((t - mt) / 60) + ":" + (mt < 10 ? "0" + mt : mt);

            item.Header.LineNow.style.width = i;
            item.Header.TitleTime.innerHTML = t;
            item.LineNow.style.width = i;
            item.TitleTime.innerHTML = t;
        };
    }
}



class TrackItemJSON {
    constructor(name, artist, file, time) {
        this.name = name;
        this.artist = artist;
        this.file = file;
        this.time = time;
    }
}
var trackListJSON = [
    new TrackItemJSON("Mortals", "Warriyo", "music/1.mp3", "3:48"),
    new TrackItemJSON("GET MUCKY", "Rameses B", "music/2.mp3", "2:25"),
    new TrackItemJSON("I Like It With You", "Daniel Levi", "music/3.mp3", "2:55"),
    new TrackItemJSON("Slow Down", "Shiah Maisel, Jim Yosef", "music/4.mp3", "2:29"),
];