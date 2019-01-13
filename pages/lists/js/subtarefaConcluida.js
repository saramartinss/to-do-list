function subtarefaConcluida(input){

    if (input.nextElementSibling.classList.contains('lista__subtarefa-nome')){
        input.nextElementSibling.classList.remove('lista__subtarefa-nome')
        input.nextElementSibling.classList.add('checked')
    } else {
        input.nextElementSibling.classList.remove('checked')
        input.nextElementSibling.classList.add('lista__subtarefa-nome')
    }
    
    const listaSubtarefas = input.parentNode.parentNode.parentNode
    const arrayCheckbox = Array.prototype.slice.call(listaSubtarefas.querySelectorAll('.checkboxSubtarefa'))

    if(arrayCheckbox.every(checkClass)){
        arrayCheckbox.forEach(function(item){
          const gettingTitle = item.parentNode.parentNode.parentNode.parentNode
          const title = gettingTitle.querySelector('.lista__tarefa-titulo')
          const checkbox = gettingTitle.querySelector('.lista__tarefa-checkbox')
          title.classList.add('checked')
          checkbox.checked = true
        })
    } else {
        arrayCheckbox.forEach(function(item){
            const gettingTitle = item.parentNode.parentNode.parentNode.parentNode
            const title = gettingTitle.querySelector('.lista__tarefa-titulo')
            const checkbox = gettingTitle.querySelector('.lista__tarefa-checkbox')
            title.classList.remove('checked')
            checkbox.checked = false
        })
    }
}

function checkClass(box) {
    return box.nextElementSibling.classList.contains('checked')
}