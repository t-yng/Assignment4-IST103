const moveToListProjectsPage = () => {
  location.href = "listprojects.html";
};

document.getElementById("sign-in-button").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      moveToListProjectsPage();
    })
    .catch((error) => {
      window.alert("Failed Sign In");
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("Logging fail", { errorCode, errorMessage });
    });
});

document.getElementById("google-button").addEventListener("click", function () {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.email	");

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function () {
      moveToListProjectsPage();
    })
    .catch(function (error) {
      alert("Failed Sign In");
      console.log("Logging fail", error);
    });
});
