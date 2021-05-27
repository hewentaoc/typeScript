

// enum Markers {
//     A = 'A',
//     Two = '2',
//     Three = '3',
//     Four = '4',
//     Five = '5',
//     Six = '6',
//     Seven = '7',
//     Eight = '8',
//     Nine = '9',
//     Ten = '10',
//     Eleven = 'J',
//     Twelve = 'Q',
//     Thirty = 'K'
// }
// enum Colors {
//     heart = '♥️' ,
//     spade = '♠️',
//     club = '♣️',
//     dianmond = '♦️'
// }
// type Pocker = {
//     color:Colors,
//     number:Markers
// }

// let arr:Pocker[] = [];
// function createPocker():Pocker[]{
//     let marks = Object.values(Markers);
//     let colors = Object.values(Colors);
//     for (const m of marks) {
//         for (const c of colors) {
//             arr.push({
//                 color:c,
//                 number:m
//             })
//         }
//     }
//     return arr;
// }
// createPocker();
// function printPocker(pockers:Pocker[]){
//     let result = '';
//     pockers.forEach((item,index)=>{
//         let str = item.color + ' ' + item.number;
//         result += str + '\t';
//         if((index + 1) % 4 == 0){
//             result += '\n';
//         }
//     })
//     console.log(result)
// }
// printPocker(arr);



