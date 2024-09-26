let altura=0
let peso=0
let idade=0
let novaspessoas=0
let pvelha=0
let pjovem=0
var media =0
do{
  altura=Number(prompt("Qual a altura?"))
  peso=Number(prompt("qual o peso?"))
  idade=Number(prompt("qual a idade?"))
  if(idade>Pvelha){
    pvelha=peso
  }
  else if(idade<Pjovem){
    pjovem=altura
  }
  let npessoas=++
  media=(media+idade)/npessoas
  novaspessoas=prompt("Deseja adicionar mais pessoas?")
}while(Novaspessoas=='sim')
console.log(`A altura da pessoa mais jovem é ${pjovem}`)
console.log(`O peso da pessoa mais velha é ${pvelha}`)
console.log(`A media das idades é ${media}`)
