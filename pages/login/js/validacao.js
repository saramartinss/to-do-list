let form = $('.login__form');

form.validate({
    
    errorElement: 'span',
    rules: {
        name: 'required',
        password: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        name: 'Digite seu nome',
        password: {
            required: 'Digite sua senha',
            minlength: 'Sua senha deve ter no mínimo 6 caracteres'
        }
    }
})