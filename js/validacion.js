function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

const btnRegister = document.getElementById("regBtn");

const campos = document.getElementsByClassName("form-control");

const checkbox = document.getElementById("terminos");

function camposLlenos() {
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value === "") {
      return false;
    }
  }
  return true;
}

function pass6Char() {
  return document.getElementById("password1").value.length >= 6;
}

function comparePassword() {
  return (
    document.getElementById("password1").value ===
    document.getElementById("password2").value
  );
}

function validarTerminos() {
  return checkbox.checked;
}

function register() {
  if (camposLlenos() && pass6Char() && comparePassword() && validarTerminos()) {
    showAlertSuccess();
  } else {
    showAlertError();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  btnRegister.addEventListener("click", () => {
    register();
  });
});
