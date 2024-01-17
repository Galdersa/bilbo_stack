function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let text=x.toLowerCase();
    if (text == "no te rindas") {
      alert("¡Respuesta correcta! ¡Felicidades!");
      return true;
    }
    else (x != "no te rindas"); {
        alert("Respuesta incorrecta. Prueba otra vez.");
        return false;
    }
  } 