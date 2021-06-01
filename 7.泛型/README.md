# 泛型

有时，书写某个函数时，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的信息）

泛型：是指附属于函数、类、接口、类型别名之上的类型

泛型相当于是一个类型变量，在定义时，无法预先知道具体的类型，可以用该变量来代替，只有到调用时，才能确定它的类型

```泛型是对函数中各位置的类型保持一直做的一个约束```

- 很多时候，TS会智能的根据传递的参数，推导出泛型的具体类型
```js
let result = take([1,2,3,4],4);//智能推倒出 T == number类型
```
- 如果无法完成推导，并且又没有传递具体的类型，默认为空对象

- 泛型可以设置默认值
```js
function test<T = string>(){

}
```

# 在函数中使用泛型

在函数名之后写上```<泛型名称>```
```js
function test<T>(arr:T[],n:number){

}

```

# 如何在类型别名、接口、类中使用泛型

直接在名称后写上```<泛型名称>```

- 类型别名
```js
type User<T> = {
    name:T,
    arr:T[]
}
type CallBack<T> = (item:T,index:number)=> boolean;
```

- 接口
```js
interface CallBacks<T>{
    (item:T,index:number):boolean
}
```

- 类
```js
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
```
# 泛型约束

泛型约束，用于限制泛型的取值
```js
function nameToUpperCase<T extends hasNameProperty>(obj:T):T{
    let reg = /_(\w)/g
    obj.name = obj.name.replace(reg,function($,$1){
        return $1.toUpperCase();
    })
    return obj;
}
```
# 多泛型

```js
//每个参数对应一个泛型
function mixinArray<T,K>(arr1:T[],arr2:K[]):(T|K)[]{

}
```