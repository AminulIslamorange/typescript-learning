// Object desturing

const user={
    id:1,
    name:{
        firstName:'aminul',
        midleName:'islam',
        lastName:'khan'
    },
    gender:'male',
    favouriteColor:'black'
}
// const myMidleName=user.name.midleName;

const {favouriteColor,name:{midleName}}=user;
console.log(favouriteColor,midleName)


// Array

const friend=['korim','rohim','mahin']


// const mybestFriend=friend[1]

const [A,mybestFriend,c]=friend;
console.log(mybestFriend)