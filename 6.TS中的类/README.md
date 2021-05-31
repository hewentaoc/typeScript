# TS中的类

> 面向对象思想

基础部分，学习类的时候，仅讨论新增的语法部分。


**属性**

使用属性列表来描述类中的属性
```在ts中，属性应该在类中先确定下来，不能随意增加```
```js
class User {
    name:string,
    age:number
}
```

**属性的初始化检查**

```strictPropertyInitialization:true```

属性的初始化位置：

1. 构造函数中
2. 属性默认值

**属性可以修饰为可选的**
```js
class User {
    love?:string
}
```

**属性可以修饰为只读的**
```js
class User {
    readonly id:number
}
```

**使用访问修饰符**

访问修饰符可以控制类中的某个成员的访问权限

- public：默认的访问修饰符，公开的，所有的代码均可访问
- private：私有的，只有在类中可以访问
- protected：暂时不讲

Symble

**属性简写**

如果某个属性，通过构造函数的参数传递，并且不做任何处理的赋值给该属性。可以进行简写
```js
//属性简写前面必须加上修饰符，public属性都不能省略
class User {
    constructor(public name:string = 'hwt'){
        //有默认值hwt，可以不必传递参数
        //相当于 this.name = name;
    }
}

```
**访问器**

作用：用于控制属性的读取和赋值
```js
class User {
    construtor(private _name:string,  private _age:number){

    }
    set age(val:number){
        this._age = val;
    }
    get age(){
        return this._age;
    }
}
```