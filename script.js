function validaLogin(){
    login = document.getElementById("login");
    senha = document.getElementById("senha");
    confSenha = document.getElementById("confSenha");

    if(login.value == ""){
        alert("O login não pode ficar vazio!");
        login.focus();
    } else if(senha.value != confSenha.value || senha.value == "" || confSenha.value == ""){
        alert("As senhas devem ser iguais, com no máximo 8 caracteres!")
        senha.value = "";
        confSenha.value = "";
    } else {
        alert("Campos digitados corretamente!")
    }
}