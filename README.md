<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>StepTok</title>

<style>
body {
  margin: 0;
  background: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

img, video {
  max-width: 100%;
  max-height: 100vh;
  border-radius: 10px;
}
</style>
</head>

<body>

<div id="obsah"></div>

<script>
const mediaList = [
  { type: "image", src: "https://picsum.photos/600/900?random=1" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: "https://picsum.photos/600/900?random=2" }
];

let index = 0;
const container = document.getElementById("obsah");

function showNext() {
  container.innerHTML = "";

  const item = mediaList[index];

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    container.appendChild(img);
    setTimeout(showNext, 3000);
  }

  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.onended = showNext;
    container.appendChild(video);
  }

  index++;
  if (index >= mediaList.length) {
    index = 0;
  }
}

showNext();
</script>

</body>
</html>
