# yt-frame-replay
Bookmarklet for examining YouTube videos frame by frame. Save this code as a bookmark and click while watching a YouTube video:
```javascript
javascript:function advance(e,s){p.pauseVideo(),p.seekBy(e/s)}function setfps(e){return e=e}var p=document.getElementById("movie_player");fps=setfps(30),document.addEventListener("keydown",function(e){if(frames=1,80==e.which)switch(fps){case 30:setfps(60);case 60:setfps(30)}e.shiftKey&&(frames=5),e.ctrlKey&&(frames=10),e.altKey&&(frames=20),190==e.which?advance(frames,fps):188==e.which&&advance(-1*frames,fps)});
```

Press `.` to go forward by one frame and `,` to go backward by one frame.
Hold `shift` to advance by 5 frames, `ctrl` for 10, or `alt` for 20.
Press P to toggle between 30 and 60 FPS modes.
