$(document).ready(function () {
  const loginForm = $("#loginForm");

  loginForm.on("submit", function (e) {
    e.preventDefault();
    console.log("Hello");
  });
});
