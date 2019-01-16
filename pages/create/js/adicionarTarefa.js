let btnAddTask = document.querySelector('.listas__botao-adicionar-tarefa')
let box = document.querySelector('.criar-lista__inputs')

btnAddTask.addEventListener('click', function(){
    const div = document.createElement('div')
    div.classList.add('criar-lista__task-name')
    div.classList.add('adicionar-item')
    const tarefa = `<label for="adicionarTarefa">
    <input class="criar-lista__input-task-name" type="text" placeholder="Adicionar tarefa">
</label>
`
    div.innerHTML = tarefa
    box.appendChild(div)
})

const btnCreateList = document.querySelector('.criar-lista__create')
const inputListName = document.querySelector('.criar-lista__input-list-name')
const inputTaskName = document.querySelector('.criar-lista__input-task-name')
const form = document.querySelector('.criar-lista__inputs')
const listas = document.querySelector('.listas')
const divDeInputs = document.querySelector('.criar-lista__inputs')

btnCreateList.addEventListener('click', function(e){
    e.preventDefault()

    const regex = /\w+/ig;
    if(!regex.test(inputListName.value)){
        inputListName.focus()
        alert('Por favor, insira um nome para a lista')
        return false
    }

    const li = document.createElement('li')
    li.classList.add('listas__item')
    const div = `<div class="listas__item-titulo">
    <div class="listas__item-nome">
        <img src="../../assets/icone_lista.png" alt="icone lista">
        <p>${inputListName.value}</p>
    </div>
    <div class="listas__item-icones">
        <img src="../../assets/icone_editar.png" alt="icone deletar">
        <img src="../../assets/icone_deletar_lista.png" alt="icone deletar">
    </div>
</div>`
    li.innerHTML = div
    listas.appendChild(li)
})