function cleanForm(){
    event.preventDefault()
    var option = confirm("Deseja mesmo limpar o formulario??")

    if(option == true){
        document.formulario.reset()
        return
    }else
        return
}

function validForm(){
   event.preventDefault()

   let cond1 = validName()
   let cond2 = validCivil()
   let cond3 = validObjective()
   let cond4 = validContact()
   let cond5 = validProgLang()
   let cond6 = validLang()

    if(cond1 && cond2 && cond3 && cond4 && cond5 && cond6){
        document.formulario.submit()
    }
}


function validName(){

    var nome = document.formulario.name.value
    if(nome.length < 3){
        alert("Digite um nome valido")
        document.getElementById("name").innerHTML = ""
        return false
    }else{
        return true
    }

}

function validCivil(){
    var civil = document.formulario.civil.value

    if(civil == 0){
        document.getElementById("civil").innerHTML = "Selecione um estado civil valido"
        return false
    }else{
        return true
    }
}

function validObjective(){
    var objective = document.formulario.objetivo

    if(objective.length <= 0){
        document.getElementById("objetivo").innerHTML = "Campo de preenchimento obrigatório."
        return false
    }else{
        return true
    }
}

function validContact(){
    var tel = document.formulario.cellphone
    var email = document.formulario.email

    if(tel.value.length == 0 && email.value.length){
        document.getElementById("cellphone").innerHTML = "Campo do telefone ou email devem ser preenchidos."
        document.getElementById("email").innerHTML = "Campo do telefone ou email devem ser preenchidos."
        return false
    }else{
        return true
    }
}

function validLang(){
    var ingles = document.formulario.idioma1.value;
    var espanhol = document.formulario.idioma2.value;


    if(ingles == -1 || espanhol == -1){
        document.getElementById("idioma2").innerHTML = "É necessário selecionar um nível para cada lingua.";
        return false;

    }else{
        return true;
    }

}

function validProgLang(){
    var selections = document.getElementsByClassName('checkboxProg')
    var cont = 0
    for(let i=0;i<selections.length;i++){
        if(selections[i].checked){
            break
        }else{
            cont++
        }
    }
    if(cont == selections.length){
        var confirmacao = confirm("Nenhuma linguagem foi selecionada, tem certeza que deseja continuar?")
        if(confirmacao) 
            return true
        else 
            return false
    }else{
        return true
    }
}