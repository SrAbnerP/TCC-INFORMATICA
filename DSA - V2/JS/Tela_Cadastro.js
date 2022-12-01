var error = document.querySelector(".error");
var senha = document.querySelector("#senha");
var confirmarSenha = document.querySelector("#confirmarSenha");

function comfirmPass(_) {
  if (confirmarSenha.value != senha.value) {
    confirmarSenha.setCustomValidity("Senhas diferentes");
    confirmarSenha.reportValidity();
    return false;
  } else {
    confirmarSenha.setCustomValidity("");
    return true;
  }
}
