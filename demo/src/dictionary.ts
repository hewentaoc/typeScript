interface CallBack<K,V> {
    (key:K,val:V):void;
}
export class Dictionary<K,V> {
    private keys:K[] = [];
    private vals:V[] = [];
    set(key:K,val:V){
        let index = this.keys.indexOf(key);
        if(index < 0){
            this.keys.push(key);
            this.vals.push(val);
        }else{
            this.vals[index] = val;
        }
    }
    has(key:K):boolean{
        return this.keys.includes(key);
    }
    delete(key:K){
        let index = this.keys.indexOf(key)
        if(index < 0){
            return; 
        }
        console.log(`删除的key:${key}`)
        this.keys.splice(index,1);
        this.vals.splice(index,1);
    }
    forEach(cb:CallBack<K,V>){
        this.keys.forEach((key,index)=>{
            let val = this.vals[index];
            cb(key,val);
        })
    }
    get size(){
        return this.keys.length;
    }
}

/**
 * 通过泛型
 * 约束所有键的类型相同
 * 约束所有值的类型相同
 */
let dic = new Dictionary<string,string>();

dic.set('name','wthe');
dic.set('age','22');
console.log('length:',dic.size)
dic.forEach((key,val)=>console.log(`${key}:${val}`))
dic.delete('age');
console.log('delete----')
console.log('length:',dic.size)
dic.forEach((key,val)=>console.log(`${key}:${val}`))
