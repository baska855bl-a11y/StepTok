// Témy
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌞";
  } else {
    toggleButton.textContent = "🌙";
  }
});

// Registrácia
function register() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!username || !email || !password) {
    alert("Vyplň všetky polia!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Heslá sa nezhodujú!");
    return;
  }

  const user = { username, email, password };
  localStorage.setItem("stepTokUser", JSON.stringify(user));

  alert("Registrácia úspešná! Teraz sa prihlás.");
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
}

// Prihlásenie
function login() {
  const loginEmail = document.getElementById("loginEmail").value.trim();
  const loginPassword = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("stepTokUser"));

  if (!storedUser) {
    alert("Najprv sa musíš zaregistrovať!");
    return;
  }

  if (loginEmail === storedUser.email && loginPassword === storedUser.password) {
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("profileBox").classList.remove("hidden");
    document.getElementById("welcome").innerText = "Vitaj, " + storedUser.username + " 🎉";
    loadFeed();
  } else {
    alert("Nesprávne údaje.");
  }
}

// Odhlásenie
function logout() {
  document.getElementById("profileBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

// Automatický feed videí
function loadFeed() {
  const feedContainer = document.getElementById("feedContainer");
  const mediaList = [
    { type: "image", src: "https://picsum.photos/600/400?random=1" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://picsum.photos/600/400?random=2" }
  ];

  feedContainer.innerHTML = ""; // Clear the feed

  mediaList.forEach(item => {
    const mediaElement = document.createElement(item.type === "image" ? "img" : "video");
    mediaElement.src = item.src;
    if (item.type === "video") {
      mediaElement.autoplay = true;
      mediaElement.muted = true;
      mediaElement.playsInline = true;
    }
    feedContainer.appendChild(mediaElement);
  });
}
