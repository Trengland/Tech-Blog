$(document).ready(() => {
    const loginForm = $("#login-form");
    const emailInput = $("#email-input");
    const passwordInput = $("#password-input");
  
    loginForm.on("submit", (event) => {
      event.preventDefault();
  
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      loginUser(userData);
      emailInput.val("");
      passwordInput.val("");
    });
  
    function loginUser(userData) {
      $.post("/api/users/login", userData).then(() => {
        window.location.replace("/dashboard");
      }).catch((err) => {
        console.log(err);
        alert("Incorrect email or password, please try again");
      });
    }
  });
  