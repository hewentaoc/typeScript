import { Markers, Colors, NormalCard, Jorker, Card } from "./pokerMap";

// let arr:Pocker[] = [];
type Pocker = Card[];
// type Pocker = (NormalCard | Jorker)[];
export function createPocker():Pocker{
    let arr:Pocker = [];
    let marks = Object.values(Markers);
    let colors = Object.values(Colors);
    for (const m of marks) {
        for (const c of colors) {
            let card:NormalCard = {
                color:c,
                number:m,
                show(){
                    // console.log(this.color + this.number)
                    return this.color + " " +this.number;
                }
            }
            arr.push(card);
        }
    }
    let jk:Jorker = {
        status:"Big Jorker",
        show(){
            // console.log(this.status);
            return this.status;
        }
    }
    arr.push(jk);
    jk = {
        status:"Small Jorker",
        show(){
            // console.log(this.status)
            return this.status;
        }
    }
    arr.push(jk);
    return arr;
}
export function printPocker(pockers:Pocker){
    let result = '';
    pockers.forEach((item,index)=>{
        // let str = item.
        result += item.show() + '\t';
        if((index + 1) % 4 == 0){
            result += '\n';
        }
    })
    console.log(result)
}



