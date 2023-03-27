console.log("Logout.js is loaded");
const logout = async function () {
  const logoutUser = await fetch("/api/betalogin/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const logoutManager = await fetch("/api/Managelogin/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (logoutUser.ok) {
    document.location.replace("/");
  } else if (logoutManager.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout-link").addEventListener("click", logout);
