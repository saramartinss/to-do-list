function subtarefaConcluida(input){

    if (input.nextElementSibling.classList.contains('list__subtask-name')){
        input.nextElementSibling.classList.remove('list__subtask-name')
        input.nextElementSibling.classList.add('checked')
    } else {
        input.nextElementSibling.classList.remove('checked')
        input.nextElementSibling.classList.add('list__subtask-name')
    }
    
    const listaSubtarefas = input.parentNode.parentNode.parentNode
    const arrayCheckbox = Array.prototype.slice.call(listaSubtarefas.querySelectorAll('.checkboxSubtask'))

    if(arrayCheckbox.every(checkClass)){
        arrayCheckbox.forEach(function(item){
          const gettingTitle = item.parentNode.parentNode.parentNode.parentNode
          const title = gettingTitle.querySelector('.list__task-title')
          const checkbox = gettingTitle.querySelector('.list__task-checkbox')
          title.classList.add('checked')
          checkbox.checked = true
        })
    } else {
        arrayCheckbox.forEach(function(item){
            const gettingTitle = item.parentNode.parentNode.parentNode.parentNode
            const title = gettingTitle.querySelector('.list__task-title')
            const checkbox = gettingTitle.querySelector('.list__task-checkbox')
            title.classList.remove('checked')
            checkbox.checked = false
        })
    }
}

function checkClass(box) {
    return box.nextElementSibling.classList.contains('checked')
}