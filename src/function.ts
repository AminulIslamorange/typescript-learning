function addNormal(num1:number,num2:number):number{
    return num1+num2
}

const addArrow=(num1:number,num2:number):number=>num1+num2

addArrow(2,2)

// Object =>function =>(this is called method)

const poorUser={
    name:'aminul',
    balence:0,
    addBalence(value:number):number{
        const totalBalance= this.balence +value
        return totalBalance;
    }
   
}
poorUser.addBalence(500)


// in loop function meance callback function


const arr: number[]=[1,4,2,45,23];
const spuArr=arr.map((elem:number):number=>elem*elem)

