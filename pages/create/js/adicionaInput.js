let btnAddTask = document.querySelector('.lists__btn-add-task')
let box = document.querySelector('.create-list__inputs')

btnAddTask.addEventListener('click', function(){
    const input = btnAddTask.parentNode.querySelector('input')
    
    const regex = /\w+/ig;
    if(!regex.test(input.value)){
        input.focus()
        return false
    }

    const div = document.createElement('div')
    div.classList.add('create-list__task-name')
    div.classList.add('add-task')
    const tarefa = `<label for="adicionarTarefa">
    <input class="create-list__input-task-name" type="text" placeholder="Adicionar tarefa">
    </label>`
    div.innerHTML = tarefa
    box.appendChild(div)

})