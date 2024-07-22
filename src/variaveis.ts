var a = 'a' // variavel global pode ser alerado em qualquer parte do codigo 
// Hoisting: As declarações de var são movidas para o topo do escopo antes da execução do código.
// Variáveis var podem ser redeclaradas e atualizadas dentro do mesmo escopo.
let b = 'b'  // variavel pode ser alterado so na parte de bloco
const c ='c' // variavel não pode ser alterado 


console.log(a)
console.log(b)
console.log(c)


//  tipos primitivos 

let nome:string ="joao"
let idade:number = 36
let casado:boolean= true


let m:number | string // tipo numero ou texto 

let n:any=2 // any em typescript vai receber qualquer tipo


