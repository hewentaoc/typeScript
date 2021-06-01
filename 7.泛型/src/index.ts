
//这种写法，无法保持各位置的类型一致
// function take(arr:number [],n:number):any []{
//     let newArr:any[] = [];
//     if(arr.length > n){
//         return arr;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         newArr.push(item);   
//     }
//     return newArr;
// }
// let result = take([1,2],3);
// result.forEach((item)=> console.log(item))

//函数中使用泛型
function take<T>(arr:T [],n:number):T[]{
    let newArr:T[] = [];
    if(arr.length > n){
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        newArr.push(item);
    }
    return newArr;
}
let str = take<string>(['a','b','c'],3);//手动添加泛型
let result = take([1,2,3,4],4);//智能推倒出 T == number类型

//类型别名中使用泛型
type User<T> = {
    name:T,
    arr:T[]
}
let u:User<string>= {
    name:'10',
    arr:['2']
}

type CallBack<T> = (item:T,index:number)=> boolean;

interface CallBacks<T>{
    (item:T,index:number):boolean
}

function filter<T>(arr:T[],cb:CallBacks<T>):T[]{
    let newArr:T[] = [];
    arr.forEach((item,index)=>{
        if(cb(item,index)){
            newArr.push(item);
        }
    })
    return newArr;
}
// let fliterResult = filter([1,2,3],(item,index)=> item % 2 == 0)
// console.log(fliterResult)

//在类中使用泛型
class ArrayHelper<T> {
   constructor(private arr:T[]){

   }
   take(n:number):T[]{
    let newArr:T[] = [];
    if(this.arr.length > n){
        return this.arr;
    }
    for (let i = 0; i < this.arr.length; i++) {
        const item = this.arr[i];
        newArr.push(item);
    }
    return newArr; 
   }
}
let hr = new ArrayHelper([1,2,3]);
let res = hr.take(3);
res.forEach((item)=>{
    console.log(item)
})
// console.log(res)

interface hasNameProperty {
    name:string
}
// let obj = {
//     name:'ss',
//     age:23
// }
// let test:hasNameProperty = obj;

//类型约束，防止传递的参数不对
/**
 * 要求传递的参数必须是具有name属性的对象
 * @param obj 
 * @returns 
 */
function nameToUpperCase<T extends hasNameProperty>(obj:T):T{
    let reg = /_(\w)/g
    obj.name = obj.name.replace(reg,function($,$1){
        return $1.toUpperCase();
    })
    return obj;
}

let user = {
    name:'he_wen_tao',
    age:24,
    love:'sing'
}

let objRes = nameToUpperCase(user)
// console.log(objRes)

//将两个数组进行混合
//[1,3,4] + ["a","b","c"] = [1, "a", 3, "b", 4, "c"]
function mixinArray<T,K>(arr1:T[],arr2:K[]):(T|K)[]{
    if(arr1.length !== arr2.length){
        throw new Error('length muse be same!')
    }
    let newArr:(T|K)[] = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }
    return newArr;
}
let mixinResult = mixinArray([1,3,4],['a','b','c']);
console.log(mixinResult)