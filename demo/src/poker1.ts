
type Color = '♥️' | '♠️' | '♦️' | '♣️'
type Pocker = {
    color:Color,
    number:number
}
let arr:Pocker[] = [];
function createPockers():Pocker[]{
    for (let index = 1; index <= 13; index++) {
        arr.push({
            color:'♠️',
            number:index
        })
        arr.push({
            color:'♥️',
            number:index
        })        
        arr.push({
            color:'♣️',
            number:index
        })        
        arr.push({
            color:'♦️',
            number:index
        })
    }
    return arr;
}
createPockers();

function printPockers(pockers:Pocker[]){
    let result = '';
    pockers.forEach((item,index)=>{
        let str = item.color;
        if(item.number <= 10){
            str += ' ' + item.number; 
        }else if(item.number === 11){
            str += ' J';
        }else if(item.number === 12){
            str += ' Q';
        }else if(item.number === 13){
            str += ' K';
        }
        result += str + '\t';
        if((index + 1) % 4 == 0){
            result += '\n';
        }
    })
    console.log(result)
}
printPockers(arr);



