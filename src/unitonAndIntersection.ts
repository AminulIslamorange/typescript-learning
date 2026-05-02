// union |

type UserRoll='admin' |'user' 
const getDashborard=(role:UserRoll)=>{
    if(role==='admin'){
        return 'admin Dashboard '
    }
    else if(role ==='user'){
        return 'user Dashboard'
    }
    else {
         return 'guest Dashboard'
    }
}

getDashborard('admin')


// intersection &

type Employe={
    id:string;
    name:string;
    phoneNo:string;

}
type Manager={
    designation:string;
    teamSize:number;
}
type EmployeManager=Employe & Manager;

const morashaeb:EmployeManager={
    name:'mora',
    id:'123',
    phoneNo:'0151',
    designation:'khatas',
    teamSize:12
}



