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
            ulErrorsNombreBlur.innerHTML += '<li>El campo nombre no debe estar vacio</li>';
            nombre.style.border = "1px solid red";
            nombre.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else if (nombre.value.length < 2) {
            ulErrorsNombreBlur.innerHTML += '<li>El campo nombre debe tener mas de dos caracteres</li>';
            nombre.style.border = "1px solid red";
            nombre.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            ulErrorsNombreBlur.innerHTML = '';
            nombre.style.border = "2px solid green";
            nombre.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
            nombre.style.color = "white";
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
            ulErrorsApellidoBlur.innerHTML += '<li>El campo apellido no debe estar vacio</li>';
            apellido.style.border = "1px solid red";
            apellido.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else if (apellido.value.length < 2) {
            ulErrorsApellidoBlur.innerHTML += '<li>El campo apellido debe tener mas de dos caracteres</li>';
            apellido.style.border = "1px solid red";
            apellido.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            ulErrorsApellidoBlur.innerHTML = '';
            apellido.style.border = "2px solid green";
            apellido.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
            apellido.style.color = "white";
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
            ulErrorsEmailBlur.innerHTML += '<li>El campo email no debe estar vacio</li>';
            email.style.border = "1px solid red";
            email.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (expresion.test(email.value) == false) {
                ulErrorsEmailBlur.innerHTML += '<li>El campo email no es valido</li>';
                email.style.border = "1px solid red";
                email.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
            } else {
                ulErrorsEmailBlur.innerHTML = '';
                email.style.border = "2px solid green";
                email.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
                email.style.color = "white";
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
            ulErrorsTelefonoBlur.innerHTML += '<li>El campo telefono no debe estar vacio</li>';
            telefono.style.border = "1px solid red";
            telefono.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            if (!isNaN(telefono.value)) {
                ulErrorsTelefonoBlur.innerHTML = '';
                telefono.style.border = "2px solid green";
                telefono.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
                telefono.style.color = "white";
            } else {
                ulErrorsTelefonoBlur.innerHTML += '<li>El campo telefono debe ser numerico</li>';
                telefono.style.border = "1px solid red";
                telefono.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
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
            ulErrorsDireccionBlur.innerHTML += '<li>El campo direccion no debe estar vacio</li>';
            direccion.style.border = "1px solid red";
            direccion.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            ulErrorsDireccionBlur.innerHTML = '';
            direccion.style.border = "2px solid green";
            direccion.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
            direccion.style.color = "white";
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
            ulErrorsContrasenaBlur.innerHTML += '<li>El campo contraseña no debe estar vacio</li>';
            contrasena.style.border = "1px solid red";
            contrasena.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
            if (expresion.test(contrasena.value) == false) {
                ulErrorsContrasenaBlur.innerHTML += '<li>La contraseña debe tener al menos 8 caracteres, al menos una letra mayuscula, al menos una letra minuscula, al menos un numero y al menos un caracter especial</li>';
                contrasena.style.border = "1px solid red";
                contrasena.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
            } else {
                ulErrorsContrasenaBlur.innerHTML = '';
                contrasena.style.border = "2px solid green";
                contrasena.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
                contrasena.style.color = "white";
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
            nombre.style.border = "1px solid red";
            nombre.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else if (nombre.value.length < 2) {
            errores.push('El campo nombre debe tener al menos 2 caracteres');
            nombre.classList.add('is-invalid');
            nombre.style.border = "1px solid red";
            nombre.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
            nombre.style.border = "2px solid green";
            nombre.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
        }
        // 

        //validaciones de apellido
        if (apellido.value == "") {
            errores.push('El campo apellido no debe estar vacio');
            apellido.classList.add('is-invalid');
            apellido.style.border = "1px solid red";
            apellido.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else if (apellido.value.length < 2) {
            errores.push('El campo apellido debe tener al menos 2 caracteres');
            apellido.classList.add('is-invalid');
            apellido.style.border = "1px solid red";
            apellido.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            apellido.classList.remove('is-invalid');
            apellido.classList.add('is-valid');
            apellido.style.border = "2px solid green";
            apellido.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
        }
        // 

        //validaciones de email
        if (email.value == "") {
            errores.push('El campo email no debe estar vacio');
            email.classList.add('is-invalid');
            email.style.border = "1px solid red";
            email.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (expresion.test(email.value) == false) {
                errores.push('El campo email no es valido');
                email.classList.add('is-invalid');
                email.style.border = "1px solid red";
                email.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
                email.style.border = "2px solid green";
                email.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
            }
        }
        // 

        //validaciones de telefono
        if (telefono.value == "") {
            errores.push('El campo telefono no debe estar vacio');
            telefono.classList.add('is-invalid');
            telefono.style.border = "1px solid red";
            telefono.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            if (!isNaN(telefono.value)) {
                telefono.classList.remove('is-invalid');
                telefono.classList.add('is-valid');
                telefono.style.border = "2px solid green";
                telefono.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
            } else {
                errores.push('El campo telefono debe ser numerico');
                telefono.classList.add('is-invalid');
                telefono.style.border = "1px solid red";
                telefono.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
            }
        }
        // 

        //validaciones de direccion
        if (direccion.value == "") {
            errores.push('El campo direccion no debe estar vacio');
            direccion.classList.add('is-invalid');
            direccion.style.border = "1px solid red";
            direccion.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            direccion.classList.remove('is-invalid');
            direccion.classList.add('is-valid');
            direccion.style.border = "2px solid green";
            direccion.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
        }
        // 

        //validacion de contrasena
        if (contrasena.value == "") {
            errores.push('El campo contraseña no debe estar vacio');
            contrasena.classList.add('is-invalid');
            contrasena.style.border = "1px solid red";
            contrasena.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
        } else {
            let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
            if (expresion.test(contrasena.value) == false) {
                errores.push('La contraseña debe tener al menos 8 caracteres, al menos una letra mayuscula, al menos una letra minuscula, al menos un numero y al menos un caracter especial');
                contrasena.classList.add('is-invalid');
                contrasena.style.border = "1px solid red";
                contrasena.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
            } else {
                contrasena.classList.remove('is-invalid');
                contrasena.classList.add('is-valid');
                contrasena.style.border = "2px solid green";
                contrasena.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
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

