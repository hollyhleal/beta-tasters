
const subBtn = document.getElementById("contactBtn");

const newFormHandler = async function (event) {
  event.preventDefault();

  const firstName = document.querySelector('input[name="firstName"]').value;
  const lastName = document.querySelector('input[name="lastName"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
  const comments = document.querySelector('textarea[name="comments"]').value;

  const response = await fetch(`/api/contact`, {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phoneNumber,
      comments,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
    alert("Email was Sent!");
  } else {
    alert("Failed to Send Email");
  }
};
subBtn.addEventListener("click", newFormHandler);
