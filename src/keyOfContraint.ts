// key of oparetor meance type oparetor


type RiceDeveloper={
    car:string,
    bike:string,
    cng:string
};
type myVecile1='car'|'bike' |'cng';
type myVecile2=keyof RiceDeveloper;





type User={
    id:number;
    name:string;
    address:{
        city:string
    }
}


const user:User={
    id:123,
    name:'mezba',
    address:{
        city:'chitagong'
    }
}
// const myName=user.name
const myName=user['name']

const getPropertyFromObject=(obj:User,key:keyof User)=>{
    return obj[key]
}
const result=getPropertyFromObject(user,'name')