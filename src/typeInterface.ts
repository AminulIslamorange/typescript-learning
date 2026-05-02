type User={
    name:string;
    age:number;
};
interface IUser{
    name:string;
    age:number

}
type Role={
    role:'admin'|'user'

}

type UserWithRole=User & Role;


interface IUserWithRole extends IUser{
    role:'admin'|'user'
}


const user1 : IUserWithRole = {
    name:'aminul',
    age:50,
    role:'admin'


}
const user1:IUser={
    name:'Humaira',
    age:41
}

type isAdmin=boolean
const isAdmin:isAdmin=false
