// ? tarnari oparetor
// ?? nulish
// .? optional chaning




const biyerJonnoEligble=(age:number)=>{
// if (age>=21){
//     console.log('He is eligible for marray')

// }else{
//     console.log('you are not eligible')
// }
const result= age >= 21 ? 'you are eligible ' : 'you are not eligible';
console.log(result)
}
biyerJonnoEligble(20)



const userThem=undefined;
const selectedThem=userThem ?? 'Light Theam';
console.log(selectedThem)