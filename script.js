
//EQUIPAMENTOS GIGA:

let ont414 = "70:CD:91";
let risecom = "CC:C2:E0";
let podre = "14:23:0A";
let huaweiboa ="A4:BD:C4"



//EQUIPAMENTOS FAST

let iwr300 = "80:80:80"

var fast = []
fast.push(iwr300)




var equipamentos = []
equipamentos.push(ont414);
equipamentos.push(risecom);
equipamentos.push(podre);
equipamentos.push(huaweiboa);

let btn = document.querySelector("button");


btn.addEventListener("click", function(){

let resposta = document.querySelector("input").value;
let respostanova = resposta.toUpperCase();
valida(respostanova);

})

//função para validar os campos
function valida(x){

let palavranova = x;

if(palavranova.length==0){
  alert("preencha o campo de pesquisa")
  
}

else{
  let rest = equipamentos.includes(palavranova)

  if(rest==true){
    var paragrafo = document.querySelector(".final");
    paragrafo.textContent = ("EQUIPAMENTO É --GIGA---");
  
  }
 else{
  var paragrafo = document.querySelector(".final");
  paragrafo.textContent = ("EQUIPAMENTO É ---FAST---");
 }
}

}



