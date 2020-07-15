$(document).ready(function () {
  const loginForm = $("#loginForm");
  const emailInput = $("#emailInput");
  const pwInput = $("#pwInput");

  loginForm.on("submit", function (e) {
    e.preventDefault();
    // console.log("Hello");

    //     const User = {
    //       email: emailInput.val().trim(),
    //       password: pwInput.val().trim(),
    //     };

    //     $.ajax({
    //       type: "POST",
    //       url: "/api/login",
    //       data: User,
    //     }).then(() => {
    //       window.location.replace("/members");
    //     });
    //   });
    // });

    loginUser(emailInput.val(), pwInput.val()).then(() =>
      window.location.replace("/members")
    );
  });
});
const loginUser = (email, password) => {
  const userData = { email, password };
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "/api/login",
      data: userData,
    }).then((res) => resolve(res));
  });
};
