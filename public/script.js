const shopBtn = document.getElementById("shopBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (shopBtn) {
  shopBtn.addEventListener("click", async () => {
    const country = document.getElementById("country").value;
    const countryError = document.getElementById("countryError");

    countryError.textContent = "";

    try {
      const response = await fetch("/save-country", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ country })
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = data.redirect;
      } else {
        countryError.textContent = data.message;
      }
    } catch (error) {
      countryError.textContent = "Something went wrong";
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginError = document.getElementById("loginError");

    loginError.textContent = "";

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = data.redirect;
      } else {
        loginError.textContent = data.message;
      }
    } catch (error) {
      loginError.textContent = "Server error";
    }
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const signupError = document.getElementById("signupError");

    signupError.textContent = "";

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, confirmPassword })
      });

      const data = await response.json();

      if (data.success) {
        alert("Account created successfully");
        window.location.href = "login.html";
      } else {
        signupError.textContent = data.message;
      }
    } catch (error) {
      signupError.textContent = "Server error";
    }
  });
}

function goToSignup() {
  window.location.href = "signup.html";
}

function goBackToLogin() {
  window.location.href = "login.html";
}
function openSidebar() {
  document.getElementById("sidebar").style.right = "0";
}

function closeSidebar() {
  document.getElementById("sidebar").style.right = "-260px";
}