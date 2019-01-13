function tarefaConcluida(input){
    const listaSubtarefas = input.parentNode.parentNode.parentNode
    const nodeListInputCheckbox = listaSubtarefas.querySelectorAll('.checkboxSubtarefa')
    const inputsCheckbox = Array.prototype.slice.call(nodeListInputCheckbox)

    input.nextElementSibling.classList.toggle('checked')

    if(input.nextElementSibling.classList.contains('checked')){
        for(const box of inputsCheckbox){
            trocaClasse(box, 'lista__subtarefa-nome', 'checked', true)
        }
    } else {
        for(const box of inputsCheckbox){
            trocaClasse(box, 'checked', 'lista__subtarefa-nome', false)
        }
    }    
}