const signupFormHandler = async (event) => {
  event.preventDefault();
const username = document.querySelector('#username').value.trim();
const password = document.querySelector('#password').value.trim();
const response = await fetch('/api/users', {
  method: 'POST',
  body: JSON.stringify({ username, password }),
  headers: { 'Content-Type': 'application/json' },
});
if (response.ok) {
  document.location.replace('/dashboard');
} else {
  alert("Failed to Login!");
}
};
document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);

  