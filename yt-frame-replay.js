var p = document.getElementById("movie_player");

function advance(frames) {
    p.pauseVideo();
    p.seekBy(frames/60);
}

document.addEventListener("keydown", function(e) {
    frames = 1;
    if (e.ctrlKey) {
        frames = 5;
    }
    if (e.shiftKey) {
        frames = 10;
    }
    if (e.altKey) {
        frames = 10;
    }
    if (e.which == 190) {
        advance(frames);
    } else if (e.which == 188) {
        advance(frames * -1);
    }
}); /* github.com/aubreypc 2015 | MIT license */