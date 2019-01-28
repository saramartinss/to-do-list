const toDoList = document.querySelector('.lists')

toDoList.addEventListener('click', function (event) {
    if(event.target.tagName === 'INPUT'){
        if (event.target.classList.contains('list__task-checkbox')){
            tarefaConcluida(event.target)
        }
    }
    if (event.target.tagName === 'IMG') {
        if (event.target.classList.contains('list__subtask-delete')) {
            deletar(event.target)
        }
        if (event.target.classList.contains('list__task-delete')) {
            deletar(event.target.parentNode)
        }
        if (event.target.classList.contains('list__btn-add-subtask')){
            const div = event.target.parentNode
            const input = div.firstChild.nextSibling.firstChild.nextSibling

            const regex = /\w+/ig;
            if(!regex.test(input.value)){
                input.focus()
                return false
            }
            
            const titulo = input.value
            const lista = div.parentNode.childNodes[3]
            criaSubtarefa(lista, titulo)
            input.value = ''
        }
        if (event.target.classList.contains('lists__btn-add-task')){
            const div = event.target.parentNode
            const input = div.firstChild.nextSibling.firstChild.nextSibling

            const regex = /\w+/ig;
            if(!regex.test(input.value)){
                input.focus()
                return false
            }

            const titulo = input.value
            const lista = div.parentNode.childNodes[5]
            criaTarefa(lista, titulo)
            input.value = ''
        }
    }
})