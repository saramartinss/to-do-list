const lista = document.querySelector('.listas')

lista.addEventListener('click', function(event){
    if(event.target.tagName === 'IMG'){
        if(event.target.classList.contains('lista__substarefa-deletar')){
            deletar(event.target)
        }
        if(event.target.classList.contains('lista__tarefa-deletar')){
            deletar(event.target.parentNode)
        }
    }
})

function deletar(evento){
    evento.parentNode.classList.add('fadeOut')
    setTimeout(function(){
        evento.parentNode.remove()
    }, 500)
}