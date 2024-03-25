const lista=document.querySelectorAll("#Todas img");
const resultado=document.querySelector("#Resultado");
const btn1=document.querySelector("#botao1");
const btn2=document.querySelector("#botao2");

var cont = 0

for (let index = 0; index < lista.length; index++) {
    lista[index].addEventListener("click", (event) =>{
        resultado.src=lista[index].src
    }); 
}
btn1.addEventListener("click", (event)=>{
    if(cont > 0){
        cont --
        resultado.src=lista[cont].src
    }
});
btn2.addEventListener("click", (event)=>{
    if(cont < lista.length -1){
        cont ++
        resultado.src=lista[cont].src
    }
}); 