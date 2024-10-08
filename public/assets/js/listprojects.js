function viewWireframe() {
  var strWindowFeatures = "height=670,width=620,scrollbars=yes,status=yes";
  window.open(
    "/assets/images/assignment3-wireframe.png",
    "_blank",
    strWindowFeatures
  );
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      location.href = "/";
    })
    .catch((error) => {
      console.error(error);
      alert("Failed Sign Out");
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    this.location.href = "/";
  }
});
