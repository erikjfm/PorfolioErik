console.log('1');

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded',function(){
    /*
    //este evento hace que recien una vez cargada
    //el html ahi recien se ejecuta la funcion
    var logo=document.getElementById('logo')
    //logo.hasAttribute('class') metodo para constatar que tiene una class
    //true
    //logo.getAttribute('class') meotodo para saber que class tiene
    //"logo"
    //logo.setAttribute('class','nueva_clase'); metodo para cambiar la clase por la que indicamos en el segundo parametro
    var navegacion= document.getElementById('navegacion');
    //navegacion.style.display="none"
  //los elementos son nodos
  
    crear contenido
    
    var sidebar=document.querySelector('#sidebar');
    var nuevoElemento=document.createElement('h1');
    var nuevoTexto=document.createTextNode('Hola mundo')
    nuevoElemento.appendChild(nuevoTexto)
    sidebar.appendChild(nuevoElemento)
    
   //agregar entrada 6:
   var enlacesSidebar= document.querySelectorAll('#sidebar ul');
   //creando el enlace
   var nuevoEnlace=document.createElement('a');
   var textoEnlace=document.createTextNode('entrada 6');
   nuevoEnlace.appendChild(textoEnlace);
   //creando la lista
   var nuevaLista=document.createElement('li');
   nuevaLista.appendChild(nuevoEnlace);
   //lo agregamos al menu
   enlacesSidebar[0].appendChild(nuevaLista);
*/

/*
clonar nodo

var contenido=document.querySelectorAll('main');
var nuevoContenido=contenido[0].cloneNode(true);

var sidebar=document.querySelector('aside');
sidebar.insertBefore(nuevoContenido,sidebar.childNodes[5]);//insertbefore es como apenchild poniendo lo que quiero clonar, te ayuda a controlar donde posicionarlo
//dir(sidebar)//childNodes y se ve la interfaz y posicionar el elemento



controlando inserrciones con insertBefore y creando lista de post populares

var sidebar=document.querySelector('aside');

var masVisitados=document.createElement('h2');
var textoVisitados=document.createTextNode('post mas visitados');
masVisitados.appendChild(textoVisitados);
sidebar.insertBefore(masVisitados,sidebar.childNodes[0]);

  });
  
var contenido=document.querySelectorAll('main h2');
for(var i=0; i<contenido.length;i++){
 var nuevoElemento=document.createElement('li');
 var nuevoTexto=document.createTextNode(contenido[i].firstChild.nodeValue);
  nuevoElemento.appendChild(nuevoTexto);
  sidebar.insertBefore(nuevoElemento,sidebar.childNodes[1]);

}
*/
//eliminar nodos
//para pode eliminar un element siempre hay que irse hacia al padre y de ahi eliminarlo
var primerPost=document.querySelector('main article');
primerPost.parentNode.removeChild(primerPost);


//remplazando elementos
//probar en las consolas, porq tira error

var viejoNodo=document.querySelector('main h2');
var nuevoNodo=document.querySelector('footer h2');
viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo)
})();
