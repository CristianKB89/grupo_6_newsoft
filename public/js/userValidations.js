window.addEventListener('load', function () {


    let formulario = document.querySelector('#form');
    let nombre = document.querySelector('#name');
    
    nombre?.focus();
    let apellido = document.querySelector('#lastname');
    let email = document.querySelector('#correo');
    let telefono = document.querySelector('#user_phone');
    let direccion = document.querySelector('#user_address');
    let contrasena = document.querySelector('#pass');
    let imagen = document.querySelector('#image');
    let botonEnviar = document.querySelector('#botonEnviar');

    //============Validaciones en tiempo real ==============//
    //validaciones de nombre
    nombre?.addEventListener('blur', function () {
        let ulErrorsNombreBlur = document.querySelector('.ulErrorsNombreBlur')
        if (nombre.value == '') {
            ulErrorsNombreBlur.innerHTML += '<li>El campo nombre no debe estar vacio</li>'
        } else if (nombre.value.length < 2) {
            ulErrorsNombreBlur.innerHTML += '<li>El campo nombre debe tener mas de dos caracteres</li>'
        } else {
            ulErrorsNombreBlur.innerHTML = ''
        }
    });

    nombre?.addEventListener('focus', function () {
        let ulErrorsNombreBlur = document.querySelector('.ulErrorsNombreBlur')
        ulErrorsNombreBlur.innerHTML = ''
    })
    //

    //validaciones de apellido
    apellido?.addEventListener('blur', function () {
        let ulErrorsApellidoBlur = document.querySelector('.ulErrorsApellidoBlur')
        if (apellido.value == '') {
            ulErrorsApellidoBlur.innerHTML += '<li>El campo apellido no debe estar vacio</li>'
        } else if (apellido.value.length < 2) {
            ulErrorsApellidoBlur.innerHTML += '<li>El campo apellido debe tener mas de dos caracteres</li>'
        } else {
            ulErrorsApellidoBlur.innerHTML = ''
        }
    });

    apellido?.addEventListener('focus', function () {
        let ulErrorsApellidoBlur = document.querySelector('.ulErrorsApellidoBlur')
        ulErrorsApellidoBlur.innerHTML = ''
    })
    //

    //validaciones de email
    email.addEventListener('blur', function () {
        let ulErrorsEmailBlur = document.querySelector('.ulErrorsEmailBlur')
        if (email.value == "") {
            ulErrorsEmailBlur.innerHTML += '<li>El campo email no debe estar vacio</li>'
        } else {
            let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (expresion.test(email.value) == false) {
                ulErrorsEmailBlur.innerHTML += '<li>El campo email no es valido</li>'
            } else {
                ulErrorsEmailBlur.innerHTML = ''
            }
        }
    })
    email.addEventListener('focus', function () {
        let ulErrorsEmailBlur = document.querySelector('.ulErrorsEmailBlur')
        ulErrorsEmailBlur.innerHTML = ''
    })
    //

    //validaciones de telefono
    telefono?.addEventListener('blur', function () {
        let ulErrorsTelefonoBlur = document.querySelector('.ulErrorsTelefonoBlur')
        if (telefono.value == "") {
            ulErrorsTelefonoBlur.innerHTML += '<li>El campo telefono no debe estar vacio</li>'
        } else {
            if (!isNaN(telefono.value)) {
                ulErrorsTelefonoBlur.innerHTML = ''
            } else {
                ulErrorsTelefonoBlur.innerHTML += '<li>El campo telefono debe ser numerico</li>'
            }
        }
    })

    telefono?.addEventListener('focus', function () {
        let ulErrorsTelefonoBlur = document.querySelector('.ulErrorsTelefonoBlur')
        ulErrorsTelefonoBlur.innerHTML = ''
    })
    // 


    //validaciones de direccion
    direccion?.addEventListener('blur', function () {
        let ulErrorsDireccionBlur = document.querySelector('.ulErrorsDireccionBlur')
        if (direccion.value == "") {
            ulErrorsDireccionBlur.innerHTML += '<li>El campo direccion no debe estar vacio</li>'
        } else {
            ulErrorsDireccionBlur.innerHTML = ''
        }
    })

    direccion?.addEventListener('focus', function () {
        let ulErrorsDireccionBlur = document.querySelector('.ulErrorsDireccionBlur')
        ulErrorsDireccionBlur.innerHTML = ''
    })
    //

    //validaciones de contrasena
    contrasena.addEventListener('blur', function () {
        let ulErrorsContrasenaBlur = document.querySelector('.ulErrorsContrasenaBlur')
        if (contrasena.value == "") {
            ulErrorsContrasenaBlur.innerHTML += '<li>El campo contraseña no debe estar vacio</li>'
        } else {
            let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
            if (expresion.test(contrasena.value) == false) {
                ulErrorsContrasenaBlur.innerHTML += '<li>La contraseña debe tener al menos 8 caracteres, al menos una letra mayuscula, al menos una letra minuscula, al menos un numero y al menos un caracter especial</li>'
            } else {
                ulErrorsContrasenaBlur.innerHTML = ''
            }
        }
    })

    contrasena.addEventListener('focus', function () {
        let ulErrorsContrasenaBlur = document.querySelector('.ulErrorsContrasenaBlur')
        ulErrorsContrasenaBlur.innerHTML = ''
    })
    //

    //============Fin Validaciones en tiempo real ==============//


    //============Validaciones al hacer submit ==============//

    formulario.addEventListener('submit', function (evento) {

        let errores = [];

        //validaciones de nombre
        if (nombre.value == "") {
            errores.push('El campo nombre no debe estar vacio');
            nombre.classList.add('is-invalid');
        } else if (nombre.value.length < 2) {
            errores.push('El campo nombre debe tener al menos 2 caracteres');
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
        }
        // 

        //validaciones de apellido
        if (apellido.value == "") {
            errores.push('El campo apellido no debe estar vacio');
            apellido.classList.add('is-invalid');
        } else if (apellido.value.length < 2) {
            errores.push('El campo apellido debe tener al menos 2 caracteres');
            apellido.classList.add('is-invalid');
        } else {
            apellido.classList.remove('is-invalid');
            apellido.classList.add('is-valid');
        }
        // 

        //validaciones de email
        if (email.value == "") {
            errores.push('El campo email no debe estar vacio');
            email.classList.add('is-invalid');
        } else {
            let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (expresion.test(email.value) == false) {
                errores.push('El campo email no es valido');
                email.classList.add('is-invalid');
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }
        }
        // 

        //validaciones de telefono
        if (telefono.value == "") {
            errores.push('El campo telefono no debe estar vacio');
            telefono.classList.add('is-invalid');
        } else {
            if (!isNaN(telefono.value)) {
                telefono.classList.remove('is-invalid');
                telefono.classList.add('is-valid');
            } else {
                errores.push('El campo telefono debe ser numerico');
                telefono.classList.add('is-invalid');
            }
        }
        // 

        //validaciones de direccion
        if (direccion.value == "") {
            errores.push('El campo direccion no debe estar vacio');
            direccion.classList.add('is-invalid');
        } else {
            direccion.classList.remove('is-invalid');
            direccion.classList.add('is-valid');
        }
        // 

        //validacion de contrasena
        if (contrasena.value == "") {
            errores.push('El campo contraseña no debe estar vacio');
            contrasena.classList.add('is-invalid');
        } else {
            let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
            if (expresion.test(contrasena.value) == false) {
                errores.push('La contraseña debe tener al menos 8 caracteres, al menos una letra mayuscula, al menos una letra minuscula, al menos un numero y al menos un caracter especial');
                contrasena.classList.add('is-invalid');
            } else {
                contrasena.classList.remove('is-invalid');
                contrasena.classList.add('is-valid');
            }
        }
        //

        //validacion de imagen
        // let expresion = /(.*?)\.(jpg|jpeg|png|gif)$/
        // if (expresion.test(imagen.value) == false) {
        //     errores.push('El formato de la imagen no es valido, debe ser jpg,jpeg,png o gif');
        //     imagen.classList.add('is-invalid');
        // } else {
        //     imagen.classList.remove('is-invalid');
        //     imagen.classList.add('is-valid');
        // }
        // //

        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrors = document.querySelector('.errores')
            ulErrors.innerHTML = ""
            for (let i = 0; i < errores.length; i++) {
                ulErrors.innerHTML += "<li>" + errores[i] + "</li>"
            }
        } else {
            alert('Accion realizada exitosamente')
        }


    })

    //============Fin Validaciones al hacer submit ==============//
});

