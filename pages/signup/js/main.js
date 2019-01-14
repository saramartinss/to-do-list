let form = $('.cadastro__form');

form.validate({
    
    errorElement: 'span',
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6
        }
    },
    messages: {
        name: 'Digite seu nome',
        email: {
            required: 'Digite seu e-mail',
            email: 'Digite um e-mail válido'
        },
        password: {
            required: 'Digite uma senha',
            minlength: 'Sua senha deve ter no mínimo 6 caracteres'
        }
    }
})