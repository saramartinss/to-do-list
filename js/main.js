const lista = document.querySelector('.listas')

lista.addEventListener('click', function(event){
    if(event.target.tagName === 'IMG'){
        if(event.target.classList.contains('lista__substarefa-deletar')){
            deletar(event)
        }
    }
})

function deletar(event){
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
}