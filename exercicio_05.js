document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos('dolar');
});
document.querySelector('#bitcoin').addEventListener('click', function(){
    obtenerDatos('bitcoin');
});


function obtenerDatos(demonaz){

    let url = `https://mindicador.cl/api/${demonaz}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            let i = 0;

            for(let item of datos.serie){
                i++;
                resultado.innerHTML += `<li>${item.fecha.substr(0,10)} ${item.valor}</li>`
    
                if(i>10){
                    break;
                }
            }

        }

}

}