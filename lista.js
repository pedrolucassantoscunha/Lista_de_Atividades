function DeleteItem(){
    console.log("Deletar")
    this.parentElement.remove()
}

function EditarItem(){
    console.log("EditarItem")
    item_lista = this.parentElement
    texto_item_lista  = item_lista.innerText.replace("DeletarEditar", "")
    
    item_element = document.querySelector('[data-form-input]')
    item_element.value = texto_item_lista
    
    const botao_submit = document.querySelector('[button-submit]')
    botao_submit.className = 'd-none'

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.remove('d-none')

}

function CriarBotaoEditar(){
    const botao_editar =  document.createElement('button')
    botao_editar.classList.add("btn", "btn-info")
    botao_editar.innerHTML = "Editar"
    botao_editar.type = "button"
    botao_editar.addEventListener("click", EditarItem);

    return botao_editar
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Deletar"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoEditar())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}

function Editar(){
    console.log("Editar")
    
    texto_add = item_element.value
    item_lista.innerHTML = texto_add

    item_lista.appendChild(CriarBotaoDelete())
    item_lista.appendChild(CriarBotaoEditar())

    const botao_submit = document.querySelector('[button-submit]')
    botao_submit.classList.remove('d-none')
    botao_submit.classList.add('btn', 'btn-dark')

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.add('d-none')

    item_element.value = '';

}
