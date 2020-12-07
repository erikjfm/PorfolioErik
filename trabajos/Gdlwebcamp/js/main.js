//nos asegura que este codigo se ejecuto una vez
(function (){
 "use strict";

let regalo= document.getElementById('regalo');

document.addEventListener('DOMContentLoaded', function(){

    if(document.getElementById('mapa')) {
        // código de mapa
        var map = L.map('mapa').setView([-34.618173, -58.391626], 19);
        

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-34.618173, -58.391626]).addTo(map)
    .bindPopup('GDLWebCamp 2020 <br> Boletos ya disponibles <br> xD.')
    .openPopup();
     } 
    
    
    //campos usuarios
    let nombre= document.getElementById('nombre');
    let apellido=document.getElementById('apellido');
    let email=document.getElementById('email');

    //campos pases
    let pase_dia=document.getElementById('pase_dia');
    let pase_dosdias=document.getElementById('pase_dosdias');
    let pase_completo=document.getElementById('pase_completo');

    //Botones y divs
    let calcular =document.getElementById('calcular');
    let errorDiv =document.getElementById('error');
    let btnRegistro =document.getElementById('btnRegistro');
    let lista_produtos =document.getElementById('lista-productos');
    let suma= document.getElementById('suma-total');
    

    //extras
    let camisas=document.getElementById('camisa_evento');
    let etiquetas=document.getElementById('etiquetas');

     if(document.getElementById('calcular')){

     
    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener('blur', mostrarDias)//El evento blur es disparado cuando un elemento ha perdido su foco.
    pase_dosdias.addEventListener('blur', mostrarDias)
    pase_completo.addEventListener('blur', mostrarDias)

    nombre.addEventListener('blur',validarCampos);
    apellido.addEventListener('blur',validarCampos);
    email.addEventListener('blur',validarCampos);
    email.addEventListener('blur',validarMail);

    function validarCampos(){
        if(this.value==''){
            errorDiv.style.display='block';
            errorDiv.innerHTML="este campo es obligatorio";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red';
        }
        else{
            errorDiv.style.display='none';
            this.style.border='1px solid #cccccc';
        }
    }

    function validarMail(){
        if(this.value.indexOf("@") > -1){
            //indexOf() va a buscar en un array o en una cadena el caracter que le pasemos
            errorDiv.style.display='none';
            this.style.border='1px solid #cccccc';
        }
        else{
            errorDiv.style.display='block';
            errorDiv.innerHTML="debe tener al menos una @";
            this.style.border='1px solid red';
            errorDiv.style.border='1px solid red';      
        }
    }
        
    

    function calcularMontos(event){
        event.preventDefault();
        if(regalo.value===''){
            alert("debes elegir regalo");
            regalo.foucus();
            
        } else{
            let boletosDia= parseInt(pase_dia.value, 10) || 0,
                boletos2Dias=parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto=parseInt(pase_completo.value, 10) || 0,
                cantCamisas=parseInt(camisas.value, 10) || 0,
                cantEtiquetas=parseInt(etiquetas.value,10) || 0;



            let totalPagar= (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas* 10) * .93) + (cantEtiquetas * 2);

            let listadoProductos= [];

            if(boletosDia>=1){
                listadoProductos.push(boletosDia+' Pases por dia');
            }
            if(boletos2Dias>=1){
                listadoProductos.push(boletos2Dias + ' Pase por 2 dias');
            }
            if(boletoCompleto>=1){
                listadoProductos.push(boletoCompleto + ' Pase completos');
            }
            if(cantCamisas>=1){
                listadoProductos.push(cantCamisas + ' camisas');
            }
            if(cantEtiquetas>=1){
                listadoProductos.push(cantEtiquetas + ' etiquetas');
            }
            //al realizar calcular montos, cambio el style en js, y en css lo oculto
            lista_produtos.style.display="block"
             lista_produtos.innerHTML='';
            for(let i=0; i<listadoProductos.length;i++){
                lista_produtos.innerHTML +=listadoProductos[i] + '<br/>';
            }

            suma.innerHTML="$" + totalPagar.toFixed(2);


            console.log(listadoProductos);

            console.log(totalPagar);

        }
    }

    function mostrarDias(){
        let boletosDia= parseInt(pase_dia.value, 10) || 0,
            boletos2Dias=parseInt(pase_dosdias.value, 10) || 0,
            boletoCompleto=parseInt(pase_completo.value, 10) || 0;

            let diasElegidos=[];

            if(boletosDia>0){
                diasElegidos.push('viernes');
                console.log(diasElegidos)
            }
            if(boletos2Dias>0){
                diasElegidos.push('viernes', 'sabado');
                console.log(diasElegidos)
            }
            if(boletoCompleto>0){
                diasElegidos.push('viernes','sabado','domingo');
                console.log(diasElegidos)
            }
            for(let i=0;i<diasElegidos.length;i++){
                document.getElementById(diasElegidos[i]).style.display='block';
            }
    }

}


 }); //DOM CONTEN LOADED
})();



$(function(){

    //lettering

    $('.nombre-sitio').lettering();

    //Menu fijo

    let windowHeigth=$(window).height();
    let barraAltura=$('.barra').innerHeight();

    
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll>windowHeigth){
            $('.barra').addClass('fixed')
            $('body').css({'margin-top':barraAltura+'px'})
        }else{
            //creo q es para volver a la clase anterior
            $('.barra').removeClass('fixed')
            $('body').css({'margin-top':'0px'})
        }
    })

    //menu  responsive

    $('.menu-movil').on('click',function(){
        $('.navegacion-principal').slideToggle();
    })

    //programa de conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click',function(){

        $('.menu-programa a').removeClass(); //con esto eliminamos la clase activo en los que no dimos click
        $(this).addClass('activo'); //agrega la clase activo a los 3
        $('.ocultar').hide();

        let enlace= $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false
    });

    //Animaciones para los Numeros

    //nth-child: seleccionaba el elemento en base a su numero, una especie de index
    //animateNumber es el metodo del plugin animateNumber.js
    //number 6 es hasta que numero hcemos la animacion, y 1200 son milisegundos
    $('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1500)
    $('.resumen-evento li:nth-child(2) p').animateNumber({number:15},1500)
    $('.resumen-evento li:nth-child(3) p').animateNumber({number:3},1500)
    $('.resumen-evento li:nth-child(4) p').animateNumber({number:9},1500)

    //cuenta regresiva
    //countdown es el metodo del plugins countdown
    //como primer parametro pide la fecha y la hora que queremos que arranque
    //se pasa como parametro el evento porq el countdown
    $('.cuenta-regresiva').countdown('2020/11/21 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    })
});