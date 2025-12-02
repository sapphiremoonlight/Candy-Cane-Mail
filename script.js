// ===================================
// PASSWORD PROTECTION 🔐
// ===================================

const passwords = {
  Naina: "folklore",
  Roni: "blackswan",
  Kyara: "everglow",
  Zoe: "candycane",
  Lu: "cozymist",
  Aana: "littlemoon",
  Star: "starglitter",
  Sakshi: "pagewhisper",
  Terechi: "radiowish",
  Milena: "midnightviolet",
  Estela: "booklight",
  Jana: "warmnovember",
  Jupiter: "orbitjoy",
  Nala: "cozycandle",
  Lottie: "moonbeam",
  Lena: "frostpetal",
  Aluene: "snowflake",
  Irene: "pastelwish",
  Rachel: "winterbloom",
  Mina: "darkverse",
  Ameerah: "vertigo"
};

// Grab DOM elements
const inbox = document.getElementById('inbox');
const emailView = document.getElementById('emailView');
const backBtn = document.getElementById('backBtn');

const emailAvatar = document.getElementById('emailAvatar');
const emailTo = document.getElementById('emailTo');
const emailSubject = document.getElementById('emailSubject');
const emailMessage = document.getElementById('emailMessage');

// Function to show email
function showEmail(message) {
  emailAvatar.src = message.dataset.avatar;
  emailAvatar.alt = message.dataset.to;
  emailTo.textContent = `To: ${message.dataset.to}`;
  emailSubject.textContent = message.dataset.subject;
  emailMessage.textContent = message.dataset.message;

  inbox.style.display = 'none';
  emailView.classList.add('visible');
}

// Function to go back to inbox
function goBack() {
  emailView.classList.remove('visible');
  inbox.style.display = 'flex';
}

// Function to check password before opening
function checkPassword(message) {
  const recipient = message.dataset.to.trim();
  const userPassword = prompt(`Enter password for ${recipient}:`);

  if (userPassword === null) return; // user cancelled

  if (userPassword === passwords[recipient]) {
    showEmail(message);
  } else {
    alert("❌ Wrong password! Access denied.");
  }
}

// ===================================
// MESSAGE CLICK EVENTS 🖱️
// ===================================

// Attach click event to each message preview
document.querySelectorAll('.message-preview').forEach(msg => {
  msg.addEventListener('click', () => checkPassword(msg));
});

// Attach event to back button
backBtn.addEventListener('click', goBack);

// ===================================
// SNOW TRAIL ❄️
// ===================================

document.addEventListener("mousemove", (e) => {
  const snow = document.createElement("div");
  snow.textContent = "❄️";
  snow.style.position = "absolute";
  snow.style.left = e.pageX + "px";
  snow.style.top = e.pageY + "px";
  snow.style.pointerEvents = "none";
  snow.style.fontSize = "1rem";
  snow.style.opacity = 0.8;
  snow.style.zIndex = 9999;
  snow.style.transition = "transform 1s ease-out, opacity 1s ease-out";
  document.body.appendChild(snow);

  setTimeout(() => {
    snow.style.transform = "translateY(20px)";
    snow.style.opacity = 0;
  }, 10);

  setTimeout(() => snow.remove(), 1000);
});
