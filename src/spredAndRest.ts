// spread oparetor
const friend =['rohim','korim'];
const schoolFriend=["pinto",'mintu'];
const collegeFriend=['mudo','kodo'];

friend.push(...schoolFriend)
console.log(friend)

// Object spread oparetor

const user={
    name:"aminul",
    proffection:'developer',
    age:'27',
}
const otherInfo={
    status:'single',
    girlfriend:'no'
}

const allinfo={...user,...otherInfo}
// console.log(allinfo)


// Rest oparetor

const sendInvite=(friend1:string,friend2:string,friend3:string)=>{
    console.log(`send invitarion to the friend ${friend1}`)
}
sendInvite('pinto','mintu','gandu')



const sendInvitetion=(...friends:string[]) =>{
    friends.forEach((friend:string)=>console.log(`frined invited to ${friend}`))
}
    
sendInvitetion('pinto','mintu','gandu')