<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StepTok</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Vitaj na StepTok!</h1>
  <p>Tu môžeš nahrávať fotky a videá priamo v prehliadači.</p>

  <div class="buttons">
    <button id="uploadPhoto">Nahrať fotku</button>
    <button id="uploadVideo">Nahrať video</button>
  </div>

  <div id="preview"></div>

  <script src="script.js"></script>
</body>
</html>

style.css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
}

.buttons {
  margin: 20px 0;
}

button {
  padding: 12px 25px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

#preview {
  margin-top: 30px;
}

#preview img, #preview video {
  max-width: 300px;
  margin: 10px;
  border-radius: 5px;
}

Pridanie CSS pre StepTok

script.js
const photoBtn = document.getElementById('uploadPhoto');
const videoBtn = document.getElementById('uploadVideo');
const preview = document.getElementById('preview');

photoBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  };
  input.click();
});

videoBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'video/*';
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const video = document.createElement('video');
      video.src = reader.result;
      video.controls = true;
      preview.appendChild(video);
    };
    reader.readAsDataURL(file);
  };
  input.click();
});
