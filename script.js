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
