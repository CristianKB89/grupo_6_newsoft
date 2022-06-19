window.addEventListener("load", function () {
  let formulario = document.querySelector("#form");
  let email = document.querySelector("#correo");
  let contrasena = document.querySelector("#pass");
  //============Validaciones en tiempo real ==============//
  //validaciones de email
  email.addEventListener("blur", function () {
    let ulErrorsEmailBlur = document.querySelector(".ulErrorsEmailBlur");
    if (email.value == "") {
      ulErrorsEmailBlur.innerHTML +=
        "<li>El campo email no debe estar vacio</li>";
    } else {
      let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (expresion.test(email.value) == false) {
        ulErrorsEmailBlur.innerHTML += "<li>El campo email no es valido</li>";
      } else {
        ulErrorsEmailBlur.innerHTML = "";
      }
    }
  });
  email.addEventListener("focus", function () {
    let ulErrorsEmailBlur = document.querySelector(".ulErrorsEmailBlur");
    ulErrorsEmailBlur.innerHTML = "";
  });
  //

  //validaciones de contrasena
  contrasena.addEventListener("blur", function () {
    let ulErrorsContrasenaBlur = document.querySelector(
      ".ulErrorsContrasenaBlur"
    );
    if (contrasena.value == "") {
      ulErrorsContrasenaBlur.innerHTML +=
        "<li>El campo contraseña no debe estar vacio</li>";
    } else {
      ulErrorsContrasenaBlur.innerHTML = "";
    }
  });

  contrasena.addEventListener("focus", function () {
    let ulErrorsContrasenaBlur = document.querySelector(
      ".ulErrorsContrasenaBlur"
    );
    ulErrorsContrasenaBlur.innerHTML = "";
  });

  //============Validaciones al hacer submit ==============//

  formulario.addEventListener("submit", function (evento) {
    let errores = [];

    //validaciones de email
    if (email.value == "") {
      errores.push("El campo email no debe estar vacio");
      email.classList.add("is-invalid");
    } else {
      email.classList.remove("is-invalid");
      email.classList.add("is-valid");
    }
    //
    //validacion de contrasena
    if (contrasena.value == "") {
      errores.push("El campo contraseña no debe estar vacio");
      contrasena.classList.add("is-invalid");
    } else {
      contrasena.classList.remove("is-invalid");
      contrasena.classList.add("is-valid");
    }

    if (errores.length > 0) {
      evento.preventDefault();
      let ulErrors = document.querySelector(".errores");
      ulErrors.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        ulErrors.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });

  //============Fin Validaciones al hacer submit ==============//
});
