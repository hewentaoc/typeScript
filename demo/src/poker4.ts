import { Deck } from './classmodule/card';


let deck = new Deck();
deck.print();
deck.shuffle(); 
console.log('--------');
// deck.print();
let player = deck.licensing();
console.log('player1:----'+'\n');
player.player1.print();
console.log('player2:----'+'\n');
player.player2.print();
console.log('player3:----'+'\n');
player.player3.print();
console.log('player4:----'+'\n')
player.left.print();