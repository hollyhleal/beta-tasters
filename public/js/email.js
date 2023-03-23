async function newFormHandler(event) {
  event.preventDefault();

  const firstName = document.querySelector('input[name="firstName"').value;
  const lastName = document.querySelector('input[name="lastName"').value;
  const email = document.querySelector('input[name="email"').value;
  const phoneNumber = document.querySelector('input[name="phoneNumber"').value;
  const comments = document.querySelector('textarea[name="comments"]').value;

  if (comments) {
    await fetch("/api/contact", {
      method: "POST",
      body: json.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        comments,
      }),
    });
    document.location.reload();
  }
}

document
  .querySelector("#contact-form")
  .addEventListener("submit", newFormHandler);
