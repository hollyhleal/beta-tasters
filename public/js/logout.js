console.log("Logout.js is loaded");
//currently rendering alert message instead of logging user out.
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
//need to have logoutManager and logoutUser in same function.
//This is working, but should still be included in singular 'logout' function with logoutUser.
// const logoutManager = async function () {
//   const response = await fetch("/api/Managelogin/logout", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert("Failed to log out");
//   }
// };

// document
//   .querySelector("#logout-link-manager")
//   .addEventListener("click", logoutManager);
