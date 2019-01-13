function trocaClasse(box, remove, adiciona, checked){
    if(box.nextElementSibling.classList.contains(remove)){
        box.nextElementSibling.classList.remove(remove)
        box.nextElementSibling.classList.add(adiciona)
        box.checked = checked
    }
}