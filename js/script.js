// Animation
AOS.init({
    duration: 1000,
    once: true
});

// Clear form data after submission
const form = document.getElementById("right-connect");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    form.reset();
  });
});