var p = document.getElementById("movie_player");

function advance(frames, fps) {
    p.pauseVideo();
    p.seekBy(frames/fps);
}

function setfps(fps) {
    fps = fps;
    return fps;
}

fps = setfps(30);

document.addEventListener("keydown", function(e) {
    frames = 1;
    if (e.which == 80) {
        switch(fps) {
            case 30:
                setfps(60);
            case 60:
                setfps(30);
        } 
    }
    if (e.shiftKey) {
        frames = 5;
    }
    if (e.ctrlKey) {
        frames = 10;
    }
    if (e.altKey) {
        frames = 20;
    }
    if (e.which == 190) {
        advance(frames, fps);
    } else if (e.which == 188) {
        advance(frames * -1, fps);
    }
}); /* github.com/aubreypc 2015 | MIT license */