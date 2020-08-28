function cleanForm(){
    var option = confirm("Deseja mesmo limpar o formulario??");

    if(option == true){
        document.formulario.reset();
    }else
        alert("Cancelado"); 
}