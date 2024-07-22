// const num:number=15

// if(num>15){
//     console.log("num é maior")
// }else if(num===15){
//     console.log("num é igual a 15")
// }else{
//     console.log("É menor que 15")
// }


const typeUser={
    admin:"seja bem vindo admin",
    student:"você é um estudante",
    viewer:"pode visualizar"
}

const usuario='admin'

function validateUser(user:string){
    console.log(typeUser[user as keyof typeof typeUser])
}

validateUser(usuario)
validateUser('student')
validateUser('viewer')