function tarefaConcluida(input){
    const listaSubtarefas = input.parentNode.parentNode.parentNode
    const nodeListInputCheckbox = listaSubtarefas.querySelectorAll('.checkboxSubtask')
    const inputsCheckbox = Array.prototype.slice.call(nodeListInputCheckbox)

    input.nextElementSibling.classList.toggle('checked')

    if(input.nextElementSibling.classList.contains('checked')){
        for(const box of inputsCheckbox){
            trocaClasse(box, 'list__subtask-name', 'checked', true)
        }
    } else {
        for(const box of inputsCheckbox){
            trocaClasse(box, 'checked', 'list__subtask-name', false)
        }
    }    
}