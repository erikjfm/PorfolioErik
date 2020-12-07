console.log("Holaaaaaa")
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
