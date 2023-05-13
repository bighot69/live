let bVideos = ["./bg/bg0.mp4", "./bg/bg1.mp4", "./bg/bg2.mp4", "./bg/bg3.mp4"];

let random = Math.floor(Math.random()*4);

console.log(bVideos[random]);

document.getElementById('vbg').src = bVideos[random];