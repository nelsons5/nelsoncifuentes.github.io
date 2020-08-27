/*EFECTO PARA LA FOTO PRINCIPAL 
BIGIMG HACE UN POCO MAS GRANDE Y CAMBIA EL TIPO Y COLOR DEL BORDE
NORMALIMG DEVUELVE LA FOTO A LA NORMALIDAD*/
function bigImg(x) {
    x.style.height = "265px";
    x.style.width = "255px";
    x.style.border="dotted 5px red"
  }
  
  function normalImg(x) {
    x.style.height = "250px";
    x.style.width = "240px";
    x.style.border=""
    x.style.borderTop= "5px inset red";
    x.style.borderBottom = "5px outset black";
  }

/*WIDGET TABS*/
  $(document).ready(function() {
    $("#proyectTabs").tabs();
   });

  /*Validar los campos del formulario*/
   function validate(){
     //Obtenemos los valores de los input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("razon").value;
    //Error_message es el que se visualizara cuando exista un error
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    // creamos una variable llamada text en donde escribiremos el tipo de error
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(!validarEmail(email) || email.length < 6){
      text = "Ingresa una dirección de correo valida";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length < 30){
      text = "Escribe por lo menos 30 caracteres";
      error_message.innerHTML = text;
      return false;
    }
    alert("DATOS ALMACENADOS CORRECTAMENTE");
    return true;
  }

  function validarEmail(valor) {
    //Esta formula nos indicara si el email es correcto debe ser de esta forma: nombre usuario + @ + servidor + dominio
    //si es corecto devuelve true sino false
    if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor))
      return true;
      else 
      return false;
    }
