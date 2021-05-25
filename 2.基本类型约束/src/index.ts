let a:string;

a = 'eee';

//最后一个number表示函数的返回值是number类型
function add(a:number,b:number):number{
    return a + b;
}
let result = add(2,1)

let number:string = '33';

let age ;

let str = '333';

function isEven(num):boolean{
    return num % 2 == 0;
}
let isFlag = isEven(10);

let arr = [1,2,3];//定义一个number数组
let arr1:number [] = [1,2,3];
let arr2: Array<number> = [2,3];
let arr3 = [];

function printValue(obj:object){
    const val = Object.values(obj);
    console.log(val);
    val.forEach((item)=> console.log(item));
}
printValue({
    name:'hwt',
    age:30
})

// let n:string = undefined;
// n.toUpperCase();

function printMenu(){

}

function alwaysDoSomething():never{
    while(true){

    }
}
// let ss = alwaysDoSomething();

let sex:'男'| '女';
sex = '男';
console.log(sex)

let arr4:[] = [];//该数组永远只能取值为一个空数组

let user:{
    name:string,
    age:number
}

user = {
    name:'hwt',
    age:24
}

console.log(user)

let tu:[number,string];
tu = [1,'s'];//数组中类型限制

let data:any = 'ss';

let numbers:number = data;//any类型可以绕过类型检查
console.log(numbers)

//类型别名
type User = {
    name:string,
    age:number
}
type Sex = '男' | '女';

let obj1:User;
obj1 = {
    name:'wthe',
    age:24
}
// obj1.a = 2;


function getUsers(s:Sex):User[]{
    return [{
        name:'ls',
        age:23,
    }];
}

let users = getUsers('男')
console.log(users)

function sum(a:number,b:number,c?:number){
    if(c){
      return a + b + c;
    }else{
        return a + b;
    }
}
sum(1,2);
function combine(a:number,b:number):number;
function combine(a:string,b:string):string;
//函数重载
function combine(a:number | string , b: number | string):number|string{
    if(typeof a == 'string' && typeof b =='string'){
        return a + b;
    }else if(typeof a  == 'number' && typeof b == 'number'){
        return a + b;
    }
    throw new Error('必须是相同的类型')
}
let res1 = combine(1,1);
// let res2 = combine('1',2);
let res3 = combine('1','3');


// document.write('a')