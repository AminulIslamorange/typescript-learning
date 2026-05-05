const arrayOfNumber:number[]=[1,45,21];
const arrayOfString:string[]=['1','2','234'];

const arrayOfStringUsingNumber:string[]=arrayOfNumber.map((num)=>num.toString());
console.log(arrayOfStringUsingNumber)

type AreaOfNum={
    hight:number;
    width:number;
};
type hight= AreaOfNum['hight'];


// type AreaOfString={
//     hight:string;
//     width:string;
// }
type AreaOfString={
    [key in 'hight' |'width']:string
}
type AreaOfS={
    [key in keyof AreaOfNum]:string
}

