
var validator = require('validator');


function send() {
  document.getElementById("formulario").submit();
  formulario.addEventListener(submit)
  console.log(validator)
}


const form = document.getElementById('formulario');
form.addEventListener('submit', function(e){
    document.getElementById("messagealert").innerHTML = '';
    e.preventDefault();




   let numbercard = document.getElementById("numbercard").value;
   if(validator.isCreditCard(numbercard) === false) {
        document.getElementById("messagealert").innerHTML += numbercard+" no parece un numero de targeta valido <br>";

   }
    let cvc = document.getElementById("cvc").value;
   if(validator.isIdentityCard(cvc) === false) {
        document.getElementById("messagealert").innerHTML += cvc+" no es un identificador valido <br>" ;

   }
    let nombre = document.getElementById("nombre").value;
   if(validator.isEmpty(nombre) === true) {
        document.getElementById("messagealert").innerHTML += "debes ingresar tu nombre<br>" ;
        }

    let apellido = document.getElementById("apellido").value;
   if(validator.isEmpty(apellido) === true) {
        document.getElementById("messagealert").innerHTML += "debes ingresar tu apellido<br>" ;
        }

    let postal = document.getElementById("postal").value;
   if(validator.isEmpty(postal) === true) {
        document.getElementById("messagealert").innerHTML += " debes ingresar el codigo postal<br>" ;
        }

    else if(validator.isNumeric(postal) === false) {
        document.getElementById("messagealert").innerHTML += postal +" no es un codigo postal valido<br>" ;
   }



   console.log(validator.isCreditCard(numbercard));

});


