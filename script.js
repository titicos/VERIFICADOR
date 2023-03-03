
//EQUIPAMENTOS GIGA:

let ont414 = "70:CD:91";//adicionado
let risecom = "CC:C2:E0";//adicionado
let huaweiboa ="A4:BD:C4"//
let HG8145V5 ="14:23:0A";//
let EG8145V5="A4:7C:C9";//
let ZXHNF670L="F8:64:B8";//
let HHG8145V5 = "24:91:BB";//
let HG8145V52 = "14:AB:02";//
let ZT199 = "44:59:43";//




//EQUIPAMENTOS FAST

let iwr300 = "80:80:80"

var fast = []
fast.push(iwr300)

var equipamentos = []
equipamentos.push(ont414);
equipamentos.push(risecom);
equipamentos.push(huaweiboa);
equipamentos.push(HG8145V5);
equipamentos.push(EG8145V5);
equipamentos.push(ZXHNF670L);
equipamentos.push(HHG8145V5);
equipamentos.push(HG8145V52);
equipamentos.push(ZT199);

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
    adicionarImagem();
  
  }
 else{
  var paragrafo = document.querySelector(".final");
  paragrafo.textContent = ("EQUIPAMENTO É ---FAST---");
 }
}

}


  function adicionarImagem(){

  let resposta = document.querySelector("input").value;
  let respostanova = resposta.toUpperCase();

  let semPonto =respostanova.replace(/:/g, "");

  var imagem =document.querySelector(".imagem");
  imagem.setAttribute('src','equipamentos/'+semPonto+'.jpg')
  
  }



