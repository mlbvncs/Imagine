/*Validando email*/
function validandoEmail(email){
    var re = /\S+@\S+\.\S+/
    return re.test(email)
}
/*Recados ao enviar input com valor não aceito*/
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var email = document.getElementById("email")
    var mensagem = document.getElementById("mensagem")

    mensagem.innerHTML = "Digite um endereço de email válido!"
    if(validandoEmail(email.value) === true){
        mensagem.innerHTML = ""
        alert("Esta é a única página deste projeto!")
        window.location.reload()
    }else{
        mensagem.innerHTML = "Digite um endereço de email válido!"
        email.focus()
    }
})
/*Fazendo menu aparecer e desaparecer*/
function nav_bar(){
    var nav_bar = document.getElementById("nav-bar")

    if(nav_bar.style.top === "0px"){
        nav_bar.style.top = "-172px"
    }else{
        nav_bar.style.top = "0px"
    }
}