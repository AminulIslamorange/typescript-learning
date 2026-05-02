type User={
    id: number,
    name: {
        firstName: string;
        lastName: string;


    },
    gender: 'male' | 'female',
    constactNo:string,
    address:{
        division:string;
        city:string
    }
}
const user1:User  = {
    id: 12,
    name:{
        firstName:'aminul',
        lastName:'islam'
    },
    gender:'male',
    constactNo:'01727302486',
    address:{
        division:'Rajhshahi',
        city:'Naogaon'
    }

}
const user2: {
    id: number,
    name: {
        firstName: string;
        lastName: string;


    },
    gender: 'male' | 'female',
    constactNo:string,
    address:{
        division:string;
        city:string
    }
} = {
    id: 12,
    name:{
        firstName:'Humaira',
        lastName:'islam'
    },
    gender:'male',
    constactNo:'01727302486',
    address:{
        division:'Rajhshahi',
        city:'Naogaon'
    }

}