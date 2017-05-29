
class Formulario {
     constructor(){
         this.oDOM = {
             btnSaludar : document.querySelector("#btnSaludar"),
             pSaludo : document.querySelector("#Saludo"),
         }; // fin del oDOM

//AJAX1 : Instanciamos  objeto XMLHttpRequest
         this.oAjax = new XMLHttpRequest ();
     }
     controller(){
         this.oDOM.btnSaludar.addEventListener("click", this.perdirAjax.bind(this))
//AJAX 2a: Definimos la función respusta

        this.oAjax.onreadystatechange = this.actualizarVista.bind(this)
         }
//AJAX 3:Realizar la peticion al servidor
         perdirAjax(){
this.oAjax.open("GET", "http://localhost:8012/Js_Web/Ajax/?", true)
this.oAjax.send(null);
         }
//AJAX 2b: Preparar la función de respuesta
        actualizarVista (){
            let oDatos
            let sHtml = "<ul>"
            if(this.oAjax.readyState == 4){
            if(this.oAjax.status ==200){

                oDatos = JSON.parse(this.oAjax.responseText)
                console.dir(this.oAjax.responseText)
                console.dir(oDatos)
                
                
            } else{
                thi.oDOM.pSaludo.innerHTML = this.oAjax.statusText
            }    
        }
            
    }
};
