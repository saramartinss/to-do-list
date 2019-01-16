const btnCreateList = document.querySelector('.create-list__create')
const inputListName = document.querySelector('.create-list__input-list-name')
const inputTaskName = document.querySelector('.create-list__input-task-name')
const form = document.querySelector('.create-list__inputs')
const listas = document.querySelector('.lists')
const divDeInputs = document.querySelector('.create-list__inputs')

btnCreateList.addEventListener('click', function(e){
    e.preventDefault()

    const regex = /\w+/ig;
    if(!regex.test(inputListName.value)){
        inputListName.focus()
        alert('Por favor, insira um nome para a lista')
        return false
    }

    const li = document.createElement('li')
    li.classList.add('lists__item')
    const div = `<div class="lists__item-title">
    <div class="lists__item-name">
        <img src="../../assets/icone_lista.png" alt="icone lista">
        <p>${inputListName.value}</p>
    </div>
    <div class="lists__item-icons">
        <img src="../../assets/icone_editar.png" alt="icone deletar">
        <img src="../../assets/icone_deletar_lista.png" alt="icone deletar">
    </div>
</div>`
    li.innerHTML = div
    listas.appendChild(li)
})