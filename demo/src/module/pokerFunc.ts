import { Pocker, Markers, Colors } from "./pokerMap";

let arr:Pocker[] = [];
export function createPocker():Pocker[]{
    let marks = Object.values(Markers);
    let colors = Object.values(Colors);
    for (const m of marks) {
        for (const c of colors) {
            arr.push({
                color:c,
                number:m
            })
        }
    }
    return arr;
}
export function printPocker(pockers:Pocker[]){
    let result = '';
    pockers.forEach((item,index)=>{
        let str = item.color + ' ' + item.number;
        result += str + '\t';
        if((index + 1) % 4 == 0){
            result += '\n';
        }
    })
    console.log(result)
}



