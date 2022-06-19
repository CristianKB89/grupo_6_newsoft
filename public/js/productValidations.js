window.addEventListener('load', function () {


    let formulario = document.querySelector('#form');
    let nombre = document.querySelector('#name');
    nombre.focus();
    let brand = document.querySelector('#brand');
    let precio = document.querySelector('#price');
    let categorias = document.querySelector('#categories');
    let color = document.querySelector('#color');
    let accesorios = document.querySelector('#accesories');
    let descripcion = document.querySelector('#description');
    let imagen = document.querySelector('#image');
    let botonEnviar = document.querySelector('#botonEnviar');

    //============Validaciones en tiempo real ==============//
    //validaciones de nombre de producto
    nombre.addEventListener('blur', function () {
        let ulErrorsNombreBlur = document.querySelector('.ulErrorsNombreBlur')
        if (nombre.value == '') {
            ulErrorsNombreBlur.innerHTML += '<li>El campo nombre de producto no debe estar vacio</li>'
        } else if (nombre.value.length < 5) {
            ulErrorsNombreBlur.innerHTML += '<li>El campo nombre de producto debe tener mas de cinco caracteres</li>'
        } else {
            ulErrorsNombreBlur.innerHTML = ''
        }
    });

    nombre.addEventListener('focus', function () {
        let ulErrorsNombreBlur = document.querySelector('.ulErrorsNombreBlur')
        ulErrorsNombreBlur.innerHTML = ''
    })
    //

    //validaciones de marca de producto
    brand.addEventListener('blur', function () {
        let ulErrorsMarcaBlur = document.querySelector('.ulErrorsMarcaBlur')
        if (brand.value == '') {
            ulErrorsMarcaBlur.innerHTML += '<li>El campo marca no debe estar vacio</li>'
        } else {
            ulErrorsMarcaBlur.innerHTML = ''
        }
    });

    brand.addEventListener('focus', function () {
        let ulErrorsMarcaBlur = document.querySelector('.ulErrorsMarcaBlur')
        ulErrorsMarcaBlur.innerHTML = ''
    })
    //

    //validaciones de precio de producto
    precio.addEventListener('blur', function () {
        let ulErrorsPrecioBlur = document.querySelector('.ulErrorsPrecioBlur')
        if (precio.value == "") {
            ulErrorsPrecioBlur.innerHTML += '<li>El campo precio no debe estar vacio</li>'
        } else {
            if (!isNaN(precio.value)) {
                ulErrorsPrecioBlur.innerHTML = ''
            } else {
                ulErrorsPrecioBlur.innerHTML += '<li>El campo precio debe ser numerico</li>'
            }
        }
    })

    precio.addEventListener('focus', function () {
        let ulErrorsPrecioBlur = document.querySelector('.ulErrorsPrecioBlur')
        ulErrorsPrecioBlur.innerHTML = ''
    })
    // 

    //validaciones de color de producto
    categorias.addEventListener('blur', function () {
        let ulErrorsCategoriasBlur = document.querySelector('.ulErrorsCategoriasBlur')
        if (categorias.value == '') {
            ulErrorsCategoriasBlur.innerHTML += '<li>El campo categorias no debe estar vacio</li>'
        } else {
            ulErrorsCategoriasBlur.innerHTML = ''
        }
    });

    categorias.addEventListener('focus', function () {
        let ulErrorsCategoriasBlur = document.querySelector('.ulErrorsCategoriasBlur')
        ulErrorsCategoriasBlur.innerHTML = ''
    })
    //

    //validar checkbox de colores   



    //validaciones de color de producto
        let contador = 0;
    color.addEventListener('click', function () {
        let ulErrorsColorBlur = document.querySelector('.ulErrorsColorBlur')
        if (color.checked == true) {
            contador++;
            if (contador == 1) {
                ulErrorsColorBlur.innerHTML = ''
            }
        } else {
            contador--;
            if (contador == 0) {
                ulErrorsColorBlur.innerHTML += '<li>Debe seleccionar un color</li>'
            }
        }
    })

    color.addEventListener('focus', function () {
        let ulErrorsColorBlur = document.querySelector('.ulErrorsColorBlur')
        ulErrorsColorBlur.innerHTML = ''
    })
    //


    //validaciones de accesorios de producto
    accesorios.addEventListener('blur', function () {
        let ulErrorsAccesoriosBlur = document.querySelector('.ulErrorsAccesoriosBlur')
        if (accesorios.value == "") {
            ulErrorsAccesoriosBlur.innerHTML += '<li>El campo accesorios no debe estar vacio</li>'
        } else {
            ulErrorsAccesoriosBlur.innerHTML = ''
        }
    })

    accesorios.addEventListener('focus', function () {
        let ulErrorsAccesoriosBlur = document.querySelector('.ulErrorsAccesoriosBlur')
        ulErrorsAccesoriosBlur.innerHTML = ''
    })
    //

    //validaciones de descripcion de producto
    descripcion.addEventListener('blur', function () {
        let ulErrorsDescripcionBlur = document.querySelector('.ulErrorsDescripcionBlur')
        if (descripcion.value == '') {
            ulErrorsDescripcionBlur.innerHTML += '<li>El campo descripcion de producto no debe estar vacio</li>'
        } else if (descripcion.value.length < 20) {
            ulErrorsDescripcionBlur.innerHTML += '<li>El campo descripcion de producto debe tener mas de veinte caracteres</li>'
        } else {
            ulErrorsDescripcionBlur.innerHTML = ''
        }
    });

    descripcion.addEventListener('focus', function () {
        let ulErrorsDescripcionBlur = document.querySelector('.ulErrorsDescripcionBlur')
        ulErrorsDescripcionBlur.innerHTML = ''
    })
    //

    //============Fin Validaciones en tiempo real ==============//


    //============Validaciones al hacer submit ==============//

    formulario.addEventListener('submit', function (evento) {

        let errores = [];

        //validaciones de nombre de producto
        if (nombre.value == "") {
            errores.push('El campo nombre de producto no debe estar vacio');
            nombre.classList.add('is-invalid');
        } else if (nombre.value.length < 5) {
            errores.push('El campo nombre debe tener al menos cinco caracteres');
            nombre.classList.add('is-invalid');
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
        }
        // 

        //validaciones de marca de producto
        if (brand.value == "") {
            errores.push('El campo marca no debe estar vacio');
            brand.classList.add('is-invalid');
        } else {
            brand.classList.remove('is-invalid');
            brand.classList.add('is-valid');
        }
        // 


        //validaciones de precio de producto
        if (precio.value == "") {
            errores.push('El campo precio no debe estar vacio');
            precio.classList.add('is-invalid');
        } else {
            if (!isNaN(precio.value)) {
                precio.classList.remove('is-invalid');
                precio.classList.add('is-valid');
            } else {
                errores.push('El campo precio debe ser numerico');
                precio.classList.add('is-invalid');
            }
        }
        // 

        //validaciones de categoria de producto
        if (categorias.value == "") {
            errores.push('El campo categorias no debe estar vacio');
            categorias.classList.add('is-invalid');
        } else {
            categorias.classList.remove('is-invalid');
            categorias.classList.add('is-valid');
        }
        // 

        //validaciones de color de producto
        if (color.checked == false) {
            errores.push('Debe seleccionar almenos un color');
            color.classList.add('is-invalid');
        } else {
            color.classList.remove('is-invalid');
            color.classList.add('is-valid');
        }
        // 

        //validaciones de accesorios de producto
        if (accesorios.value == "") {
            errores.push('El campo accesorios no debe estar vacio');
            accesorios.classList.add('is-invalid');
        } else {
            accesorios.classList.remove('is-invalid');
            accesorios.classList.add('is-valid');
        }
        // 

        //validaciones de descripcion de producto
        if (descripcion.value == "") {
            errores.push('El campo descripcion de producto no debe estar vacio');
            descripcion.classList.add('is-invalid');
        } else if (descripcion.value.length < 20) {
            errores.push('El campo descripcion debe tener al menos veinte caracteres');
            descripcion.classList.add('is-invalid');
        } else {
            descripcion.classList.remove('is-invalid');
            descripcion.classList.add('is-valid');
        }
        // 


        //validacion de imagen de producto
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