function registerAccount(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    email: email,
    password: password,
  };
  axios
    .post(" http://localhost:3000/register", data)
    .then(() => {
      alert("Đăng kí thành công");
    })
    .catch((err) => {
      console.log(err);
    });
}
