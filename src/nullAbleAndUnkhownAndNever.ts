// nullable type


const getUser=(input:string |null)=>{
    if(input){
        console.log(`user paici: ${input}`)
    }else{
        console.log('user nai :All user')
    }
}
getUser(null)

// unknown type

const productDiscountCalculator=(input:unknown)=>{
    if(typeof input=== 'number'){
        const discoutedTaka=input*0.1;
        console.log(discoutedTaka)

    }
    else if(typeof input === 'string'){
        const [discoutedTaka]=input.split(' ');
        console.log(Number(discoutedTaka) *0.1 )
    }

}

productDiscountCalculator(100)
productDiscountCalculator('100 Tk')


// void

const throwError=(msg:string):never=>{
    throw new Error(msg)

}
throwError('error')