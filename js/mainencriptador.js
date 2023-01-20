var ingresotexto = document.querySelector("#ingresotexto");
var txtencriptado = document.querySelector("#txtencriptado");
var btn1 = document.querySelector("#btn1");
var btncopiar = document.querySelector("#btncopiar");
var btndesencriptar = document.querySelector("#btndesencriptar");

// Elimina los diacríticos de un texto excepto si es una "ñ" (ES6)

function eliminarAcentos(ingresotexto) {
    return ingresotexto
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .normalize();
}

function retiroImg() {
    ingresotexto.value = " "; //retira los datos del textarea con id=ingresotexto

    //cambiando los estilos del css
    imgmuneco=document.querySelector("#imgmuneco").style.visibility = "hidden";
    document.querySelector("#mensajenoencontrado").style.visibility = "hidden";
    document.querySelector("#btncopiar").style.visibility = "visible";
};

function regresoImg(){
    
    document.querySelector("#imgmuneco").style.visibility = "visible";
    document.querySelector("#mensajenoencontrado").style.visibility = "hidden";
    document.querySelector("#btncopiar").style.visibility = "hidden";
    btn1.style.visibility = "visible";
    document.querySelector("#txtencriptado").value= " ";
    //txtencriptado.value=" ";
};


function encriptar() {
    txtencriptado = document.getElementById("txtencriptado").innerText = eliminarAcentos(ingresotexto.value).toLowerCase().replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    retiroImg();

    return txtencriptado;
}

btn1.onclick = encriptar;


function copiar() {
    navigator.clipboard.writeText(txtencriptado);
    console.log(txtencriptado);
    btn1.style.visibility = "hidden";
};

btncopiar.onclick = copiar;

async function desencriptar(){    
    try{
      var text= await  navigator.clipboard.readText(txtencriptado);
      ingresotexto.value=text.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    }catch (error){
        console.loglog("ocurrio un error:  ${error}");
    };
    regresoImg();
    console.log(ingresotexto.value);

  };    
  
btndesencriptar.onclick=desencriptar;