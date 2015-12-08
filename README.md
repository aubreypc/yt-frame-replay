# yt-frame-replay
Bookmarklet for examining YouTube videos frame by frame. Save this code as a bookmark and click while watching a YouTube video:
```javascript
javascript:function a(e){p.pauseVideo(),p.seekBy(e/60)}var p=document.getElementById("movie_player");document.addEventListener("keydown",function(e){frames=1,e.ctrlKey&&(frames=5),e.shiftKey&&(frames=10),e.altKey&&(frames=10),190==e.which?a(frames):188==e.which&&a(-1*frames)});
```

Press `.` to go forward by one frame and `,` to go backward by one frame.
Hold `shift` to advance by 5 frames, `ctrl` for 10, or `alt` for 20.
