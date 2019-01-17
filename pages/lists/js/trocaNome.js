function trocaNome(p){
    let lastName = p.textContent

    let div = p.parentNode
    p.remove()

    const input = document.createElement('input')
    div.appendChild(input)
    
    input.addEventListener('keypress', function(e){
        let key = e.which || e.keyCode
        if (key === 13) { 
            const newListName = input.value
            input.remove()
            if(input.value.length > 0){
                const newParagraph = `
                <img src="../../assets/icone_lista.png" alt="icone lista">
                <p class="lists__list-name" ondblclick="trocaNome(this)">${newListName}</p>
                `
                div.innerHTML = newParagraph
            } else {
                const newParagraph = `
                <img src="../../assets/icone_lista.png" alt="icone lista">
                <p class="lists__list-name" ondblclick="trocaNome(this)">${lastName}</p>
                `
                div.innerHTML = newParagraph
            }
            
            
        }
    })
}