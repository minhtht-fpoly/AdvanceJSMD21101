function loginAccount(e) {
  e.preventDefault();
  axios
    .post("http://localhost:3000/login", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    })
    .then((res) => {
      console.log(res);
      alert("Đăng nhập thành công");
      localStorage.setItem("accessToken", res.data.accessToken);
    })
    .catch((err) => {
      alert("Đăng nhập thất bại");
    });
}
