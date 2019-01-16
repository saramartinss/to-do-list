const toDoList = document.querySelector('.listas')

toDoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        if (event.target.classList.contains('lista__substarefa-deletar')) {
            deletar(event.target)
        }
        if (event.target.classList.contains('lista__tarefa-deletar')) {
            deletar(event.target.parentNode)
        }
        if (event.target.classList.contains('lista__botao-adicionar-subtarefa')){
            const div = event.target.parentNode
            const input = div.firstChild.nextSibling.firstChild.nextSibling
            const titulo = input.value
            const lista = div.parentNode.childNodes[3]
            criaSubtarefa(lista, titulo)
            input.value = ''
        }
        if (event.target.classList.contains('listas__botao-adicionar-tarefa')){
            const div = event.target.parentNode
            const input = div.firstChild.nextSibling.firstChild.nextSibling
            const titulo = input.value
            const lista = div.parentNode.childNodes[5]
            console.log(lista)
            criaTarefa(lista, titulo)
            input.value = ''
        }
    }
})