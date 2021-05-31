export enum Markers {
    A = 'A',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Eleven = 'J',
    Twelve = 'Q',
    Thirty = 'K'
}
export enum Colors {
    heart = '♥️' ,
    spade = '♠️',
    club = '♣️',
    dianmond = '♦️'
}


export interface Card {
    show:()=> void;
}

export interface NormalCard extends Card {
    color:Colors
    number:Markers
}

export interface Jorker extends Card{
    status:'Big Jorker' | 'Small Jorker' | 'BJ' | 'SJ'
}
// export type Pocker 
// export type Pocker = {
//     color:Colors,
//     number:Markers
// }