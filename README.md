# StepTok

**StepTok** je platforma na zdieľanie krátkych videí a obrázkov, podobná TikTok-u. Umožňuje používateľom prezerať obsah, ako aj interagovať prostredníctvom lajkov a komentárov.

## Funkcie

- Prezerať obrázky a videá.
- Možnosť lajkovania a komentovania médií.
- Automatické prechádzanie medzi obrázkami a videami.
- Prihlásenie pre prístup k personalizovanému obsahu.

## Použitie

1. Stiahnite alebo klonujte tento projekt.
2. Otvorte súbor `index.html` v prehliadači.
3. Užívajte si prezeranie médií!

## Inštrukcie na prihlásenie

- Prihlásenie je momentálne simulované ako jednoduché upozornenie.
- Pre implementáciu skutočného prihlasovania môžete pridať Firebase alebo Node.js backend.

## Prispievanie

Ak chcete prispieť do tohto projektu, prosím, fork-ujte tento repozitár a vytvorte pull request. Rád prijmem všetky návrhy na vylepšenie!

<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StepTok</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      transition: background-color 0.3s, color 0.3s;
      display: flex;
      justify-content: space-between;
      height: 100vh;
      overflow: hidden;
    }

    /* Svetlý a tmavý režim */
    body.light {
      background-color: #f1f1f1;
      color: #000;
    }
    body.dark {
      background-color: #121212;
      color: #fff;
    }

    /* Hlavná ľavá časť */
    .content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      flex-direction: column;
      text-align: center;
    }

    /* Pravá sekcia (profil, prihlásenie, režim) */
    .sidebar {
      width: 250px;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100vh;
    }

    .sidebar button {
      margin-top: 10px;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      background-color: #007BFF;
      color: white;
      border: none;
      transition: background-color 0.3s;
    }

    .sidebar button:hover {
      background-color: #0056b3;
    }

    .sidebar input {
      margin-top: 10px;
      padding: 10px;
      border-radius: 5px;
      border: none;
      width: 80%;
    }

    .sidebar .profile {
      margin-top: 20px;
    }

    .sidebar .profile p {
      margin: 5px 0;
    }

    .theme-toggle {
      margin-top: 20px;
    }

    .theme-toggle button {
      padding: 10px;
      border-radius: 5px;
      background-color: #444;
      color: white;
      border: none;
    }

    /* Content area with media (images or videos) */
    .media-container {
      margin-top: 20px;
    }

    img, video {
      max-width: 90%;
      max-height: 70vh;
      border-radius: 10px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease-in-out;
    }

    img:hover, video:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body class="light">

  <!-- Ľavá časť (Aplikácia) -->
  <div class="content">
    <h1>StepTok</h1>
    <p>Pozeraj fotky a videá!</p>

    <div id="contentArea" class="media-container">
      <!-- Obsah sa bude dynamicky meniť -->
    </div>
  </div>

  <!-- Pravá sekcia (Profil, Prihlásenie, Tmavý/Svetlý režim) -->
  <div class="sidebar">
    <!-- Prihlásenie -->
    <div id="loginForm" class="login-form">
      <h2>Prihlásenie</h2>
      <input type="text" id="loginInput" placeholder="Používateľské meno, E-mail alebo Telefón" />
      <input type="password" id="password" placeholder="Heslo" />
      <div>
        <input type="checkbox" id="usePhone" /> Použiť telefónne číslo
      </div>
      <button onclick="login()">Prihlásiť</button>
    </div>

    <!-- Profil -->
    <div id="profileSection" class="profile" style="display: none;">
      <p id="profileUsername">Používateľ: </p>
      <p>Popis profilu...</p>
      <button onclick="logout()">Odhlásiť</button>
    </div>

    <!-- Tmavý/Svetlý režim -->
    <div class="theme-toggle">
      <button onclick="toggleTheme()">Prepni režim</button>
    </div>
  </div>

  <script>
    let isDarkMode = false;
    const body = document.querySelector('body');
    const loginForm = document.getElementById('loginForm');
    const profileSection = document.getElementById('profileSection');
    const profileUsername = document.getElementById('profileUsername');
    const usePhoneCheckbox = document.getElementById('usePhone');
    const loginInput = document.getElementById('loginInput');
    const passwordInput = document.getElementById('password');

    // Funkcia na prepínanie svetlého a tmavého režimu
    function toggleTheme() {
      isDarkMode = !isDarkMode;
      body.className = isDarkMode ? 'dark' : 'light';
    }

    // Funkcia na prihlásenie
    function login() {
      const loginValue = loginInput.value;
      const password = passwordInput.value;

      // Kontrola, či používateľ zadal požiadavky na prihlásenie
      if (loginValue && password) {
        // Ak je zaškrtnuté "Použiť telefónne číslo", prihlásenie použije telefónne číslo
        if (usePhoneCheckbox.checked) {
          alert("Prihlásenie cez telefónne číslo: " + loginValue);
        } else {
          alert("Prihlásenie cez používateľské meno alebo e-mail: " + loginValue);
        }

        // Skrytie prihlásenia a zobrazenie profilu
        loginForm.style.display = 'none';
        profileSection.style.display = 'block';
        profileUsername.textContent = `Používateľ: ${loginValue}`;
      } else {
        alert("Vyplňte prihlásenie a heslo!");
      }
    }

    // Odhlásenie
    function logout() {
      loginForm.style.display = 'block';
      profileSection.style.display = 'none';
    }

    // Dynamické zobrazenie médií (obrázkov a videí)
    const mediaList = [
      { type: "image", src: "https://picsum.photos/600/400?random=1" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { type: "image", src: "https://picsum.photos/600/400?random=2" }
    ];

    let index = 0;
    const contentArea = document.getElementById("contentArea");

    function showNextMedia() {
      contentArea.innerHTML = "";
      const item = mediaList[index];
      const mediaContainer = document.createElement('div');
      mediaContainer.classList.add('media-container');
      
      if (item.type === "image") {
        const img = document.createElement("img");
        img.src = item.src;
        mediaContainer.appendChild(img);
      } else if (item.type === "video") {
        const video = document.createElement("video");
        video.src = item.src;
        video.autoplay = true;
        video.muted = true;
        video.playsInline = true;
        video.onended = showNextMedia;
        mediaContainer.appendChild(video);
      }

      contentArea.appendChild(mediaContainer);

      index++;
      if (index >= mediaList.length) {
        index = 0; // Začne to opäť od začiatku
      }
    }

    showNextMedia(); // Začať zobrazovanie médií
  </s
