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
        email.style.border = "1px solid red";
        email.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
    } else {
      let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (expresion.test(email.value) == false) {
        ulErrorsEmailBlur.innerHTML += "<li>El campo email no es valido</li>";
        email.style.border = "1px solid red";
        email.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
      } else {
        ulErrorsEmailBlur.innerHTML = "";
        email.style.border = "2px solid green";
        email.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
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
        contrasena.style.border = "1px solid red";
        contrasena.style.backgroundColor = "rgba(220, 90, 114, 0.1)";
    } else {
      ulErrorsContrasenaBlur.innerHTML = "";
      contrasena.style.border = "2px solid green";
      contrasena.style.backgroundColor = "rgba(90, 220, 108, 0.1)";
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
      errores.push(" El campo contraseña no debe estar vacio");
      contrasena.classList.add("is-invalid");
    } else {
      contrasena.classList.remove("is-invalid");
      contrasena.classList.add("is-valid");
    }

    if (errores.length > 0) {
      evento.preventDefault();
      let ulErrors = document.querySelector(".errores");
      ulErrors.innerHTML = "";
      alert(errores);
    }
  });

  //============Fin Validaciones al hacer submit ==============//
});
