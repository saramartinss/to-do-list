function deletar(evento) {
    evento.parentNode.classList.add('fadeOut')
    setTimeout(function () {
        evento.parentNode.remove()
    }, 500)
}