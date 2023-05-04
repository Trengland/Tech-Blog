const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        throw new Error("Failed to log out");
      }
    } catch (error) {
      console.error(error);
    }
  });
}
