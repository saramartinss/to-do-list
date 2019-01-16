function trocaNome(p){
    p.textContent = ''

    let div = p.parentNode
    p.remove()

    const input = document.createElement('input')
    div.appendChild(input)
    
    input.addEventListener('keypress', function(e){
        let key = e.which || e.keyCode
        if (key === 13) { 
            const newListName = input.value
            input.remove()
            const newParagraph = `
            <img src="../../assets/icone_lista.png" alt="icone lista">
            <p class="lists__list-name" ondblclick="trocaNome(this)">${newListName}</p>
            `
            div.innerHTML = newParagraph
        }
    })
}