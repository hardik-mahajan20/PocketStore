function signup() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.find((u) => u.username === username)) {
      alert("User already exists");
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can now log in.");
  }
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      localStorage.setItem("currentUser", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password");
    }
  }
  