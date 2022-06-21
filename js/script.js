//e = enter
//o = ober 
//i = ines 
//a = ai
//u = ufat 

function encriptar(){
    let texto = document.getElementById('inputTexto').value.toLowerCase();
    
    let txtCifrado = texto.replace(/e/igm,'enter');
    txtCifrado = txtCifrado.replace(/o/igm,'ober');
    txtCifrado = txtCifrado.replace(/i/igm,'imes');
    txtCifrado = txtCifrado.replace(/a/igm,'ai');
    txtCifrado = txtCifrado.replace(/u/igm,'ufat');

    document.getElementById('img-muneco').style.display = "none";
    document.getElementById('texto').style.display = "none";
    document.getElementById('texto2').innerHTML = txtCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';
}

function desencriptar(){
    let texto = document.getElementById('inputTexto').value.toLowerCase();
   
    let txtCifrado = texto.replace(/enter/igm,'e');
    txtCifrado = txtCifrado.replace(/ober/igm,'o');
    txtCifrado = txtCifrado.replace(/imes/igm,'i');
    txtCifrado = txtCifrado.replace(/ai/igm,'a');
    txtCifrado = txtCifrado.replace(/ufat/igm,'u');

    document.getElementById('img-muneco').style.display = "none";
    document.getElementById('texto').style.display = "none";
    document.getElementById('texto2').innerHTML = txtCifrado;
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inherit';
}

function copiar(){
    let contenido = document.querySelector('#texto2');
    contenido.select();
    document.execCommand('copiar');
    alert('Se copió.');
}