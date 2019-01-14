let form = $('.criar-lista__form');

form.validate({
    errorElement: 'span',
    rules: {
        listName: 'required'
    },
    messages: {
        listName: 'Por favor, insira um nome para a lista'
    }
})