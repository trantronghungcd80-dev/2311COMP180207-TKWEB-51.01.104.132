const aquarium = document.getElementById("aquarium");
const btnAddFish = document.getElementById("btnAddFish");
const btnMusic = document.getElementById("btnMusic");
const btnReset = document.getElementById("btnReset");
const bgMusic = document.getElementById("bgMusic");

let musicOn = false;
const fishImages = [
  "images/fish1.png",
  "images/fish2.png",
  "images/fish3.png",
  "images/fish4.png",
  "images/fish5.png",
];

// 👉 Tách riêng hàm thêm cá
function addFish() {
  const fish = document.createElement("div");
  fish.className = "fish";
  const img = document.createElement("img");
  img.src = fishImages[Math.floor(Math.random() * fishImages.length)];
  fish.appendChild(img);

  fish.style.top = Math.random() * window.innerHeight + "px";
  fish.style.left = Math.random() * window.innerWidth + "px";

  const anim = Math.random() > 0.5 ? "swim1" : "swim2";
  fish.style.animation = `${anim} ${8 + Math.random() * 5}s infinite alternate`;

  aquarium.appendChild(fish);
}

// Nút ➕ Thả cá
btnAddFish.addEventListener("click", addFish);

// Khởi tạo sẵn 7 con cá khi load web
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 7; i++) {
    addFish();
  }
});

// Bật/tắt nhạc
btnMusic.addEventListener("click", () => {
  if (musicOn) {
    bgMusic.pause();
    btnMusic.textContent = "🔇 Tắt nhạc";
  } else {
    bgMusic.play();
    btnMusic.textContent = "🔊 Bật nhạc";
  }
  musicOn = !musicOn;
});

// Bong bóng nổi lên
function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = Math.random() * window.innerWidth + "px";
  aquarium.appendChild(bubble);
  setTimeout(() => bubble.remove(), 6000);
}
setInterval(createBubble, 800);

// Reset hồ cá
btnReset.addEventListener("click", () => {
  document.querySelectorAll(".fish, .bubble").forEach((el) => el.remove());
});
