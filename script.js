
const users = [
  {
    email: "ganesh@gmail.com",
    username: "ganesh",
    phone: "1234567890",
    password: "password1"
  },
  {
    email: "ganesh@gmail.com",
    username: "ganesh",
    phone: "9876543210",
    password: "adminpass"
  }
];

const authMode = document.getElementById("authMode");
const identifier = document.getElementById("identifier");
const password = document.getElementById("password");
const passwordGroup = document.getElementById("passwordGroup");
const loginForm = document.getElementById("loginForm");
const loginStatus = document.getElementById("loginStatus");

authMode.addEventListener("change", () => {
  loginStatus.textContent = "";
  const mode = authMode.value;

  if (mode === "phone") {
    passwordGroup.style.display = "none";
    identifier.placeholder = "Enter Phone Number";
    password.removeAttribute("required");
  } else {
    passwordGroup.style.display = "block";
    password.setAttribute("required", true);
    identifier.placeholder = `Enter ${mode.charAt(0).toUpperCase() + mode.slice(1)}`;
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const mode = authMode.value;
  const idValue = identifier.value.trim();
  const passValue = password.value;

  let matchedUser = null;

  if (mode === "email") {
    matchedUser = users.find(u => u.email === idValue && u.password === passValue);
  } else if (mode === "username") {
    matchedUser = users.find(u => u.username === idValue && u.password === passValue);
  } else if (mode === "phone") {
    matchedUser = users.find(u => u.phone === idValue);
  }

  if (matchedUser) {
    loginStatus.style.color = "green";
    loginStatus.textContent = "✅ Login Successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 1000);
  } else {
    loginStatus.style.color = "crimson";
    loginStatus.textContent = "❌ Invalid credentials. Please try again.";
  }
});
