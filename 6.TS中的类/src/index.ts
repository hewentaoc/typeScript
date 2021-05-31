import { name } from './../../4.模块化/src/myModel';
class User {
    readonly id:number //修饰为只读类型
    sex:"男" | "女" = "男" //联合类型 + 默认值
    love ?: string //修饰为可选属性
    constructor(private _name:string , private _age:number = 22){
        this.id = Math.floor(Math.random() * 100);
    }
    getAge(){
        return this._age;
    }
    setAge(age){
        this._age = age;
    }
    /**
     * 属性访问器，用于控制属性的读取和赋值
     */
    get name(){
        return this._name;
    }
    set name(n){
        this._name = n;
    }
}

let u = new User('wthe');
console.log(u.getAge())
console.log(u.name)
console.log('-----');
u.setAge(18);
u.name = 'hwtt';
console.log(u.getAge());
console.log(u.name);



