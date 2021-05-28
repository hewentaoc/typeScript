interface User {//接口约束对象
    name:string
    age:number
    sayHello:()=> void
    sayHaha():void
    love?:string
}
interface Func {//接口约束函数
    (n:number):void
}
let f:Func = function(){

}

let u:User;
u = {
    name:"wthe",
    age:22,
    love:'sing',
    sayHaha(){

    },
    sayHello:()=>{
        console.log('hello')
    }
}

type Users = {
    name:string,
    age:number
}
let u1:Users = {
    name:'hwt',
    age:24
}


interface A {
    T1:number
}

interface B {
    T2:string
}

interface C extends A , B {//接口继承
    T3:boolean
}

let t:C = {
    T3:true,
    T1:4,
    T2:'h'
}

type A1 = {
    T1:string
}

type B1 = {
    T2:number
}

type C1 = {//类型别名的交叉类型
    T3:boolean
    T1:number
} & A1 & B1
let obj = {
    T1:'c',
    T2:4,
    T3:true,
    T4:0
}
let c1:C1 = {
    T1:1 as never,
    T2:4,
    T3:true
}


interface People {//约束只读属性
    readonly id : string
    name: string
    age: number
    readonly arr: readonly string []
}
let p:People = {
    id:'004',
    name:'wthe',
    age:24,
    arr:[]
}
// p.id = '008'

let arr: readonly string [] = ['1'];
let arr2: ReadonlyArray<string> = ['3'];
// arr[0] = 'rr';
// arr2[0] = 'ds'


interface Stu {//类型兼容性
    id:number
    school:string,
    learn():void,
    sing:'song'
}
let people = {
    id:4,
    school:'wxxy',
    name:'hwt',
    sing:'song' as 'song',//类型断言
    learn(){
        console.log('learn')
    }
}

let s:Stu = people;

let s1:Stu = {
    sing:"song",
    id:1,
    learn(){

    },
    school:'bj',
    // name:'wthe'
}

interface Cb {
    (num:number,i:number):boolean
}
let numArr:number [] = [1,3,4]
function test(cb:Cb){
    let str = 0;
    numArr.forEach((item,index)=>{
        if(cb(item,index)){
            str += item;
        }
    })
    return str;
}
let result = test((num)=> num % 2 == 0)
console.log(result)