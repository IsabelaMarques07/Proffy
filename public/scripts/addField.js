//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)


//Executar uma ação
function cloneField(){
    //Duplicar os campos

    let emptyField = false
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    const fieldsDoc = document.querySelectorAll('.fieldsDoc')
    

        fieldsDoc.forEach(function(fieldDoc) {
            if(fieldDoc.value == ""){
                emptyField = true 
            }
        })

    if(emptyField == false){
        fields.forEach(function(field) {
            field.value = ""
        })
        
    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }else{
        window.alert('Preencha os campos anteriores para adicionar um novo horário')
    }


}
