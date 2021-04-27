function login() {
  
  var nome = document.getElementById("username");
  var password = document.getElementById("password");
  const { username: usr, password: pass } = JSON.parse(
    localStorage.getItem("user")
  );
  if (nome.value == usr && password.value == pass) {
    localStorage.setItem("acesso", true);
    window.location.href = "../Pókedex/index.html";
  } else {
    localStorage.setItem("acesso", false);
    alert("Usuario ou senha inválidos");
  }
} localStorage.setItem("acesso" , false)

function register() {
  
  var username = document.getElementById("username-2");
  var email = document.getElementById("email");
  var password = document.getElementById("password-2");
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    })
  );
  alert("Usuário cadastrado com sucesso");
}
