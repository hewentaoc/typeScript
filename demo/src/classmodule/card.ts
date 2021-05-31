import { Card, Colors, Jorker, Markers, NormalCard } from "../module/pokerMap";
interface Player {
    player1:Deck;
    player2:Deck;
    player3:Deck;
    left:Deck;
}
export class Deck {
    deck:Card[] = [];
    constructor(cd?:Card []) {
        if(cd){
            this.deck = cd;
        }else{
            this.init();
        }
    }
    /**
     * 扑克牌的初始化
     */
    init(){
        let marks = Object.values(Markers);
        let colors = Object.values(Colors);
        for (const m of marks) {
            for (const c of colors) {
                let card:NormalCard = {
                    color:c,
                    number:m,
                    show(){
                        return this.color + " " +this.number;
                    }
                }
                this.deck.push(card);
            }
        }
        let jk:Jorker = {
            status:"BJ",
            show(){
                return this.status;
            }
        }
        this.deck.push(jk);
        jk = {
            status:"SJ",
            show(){
                return this.status;
            }
        }
        this.deck.push(jk);
    }
    /**
     * 打印扑克牌
     */
    print(){
        let result = '';
        this.deck.forEach((item,index)=>{
            result += item.show() + '\t';
            if((index + 1) % 4 == 0){
                result += '\n';
            }
        })
        console.log(result)
    }
    /**
     * 洗牌
     */
    shuffle(){
        for (let i = 0; i < this.deck.length; i++) {
            const changeIndex = this.getRandomIndex(0,this.deck.length)
            let temp = this.deck[i];
            this.deck[i] = this.deck[changeIndex];
            this.deck[changeIndex] = temp;
        }
    }
    /**
     * 发牌
     */
    licensing():Player{
        let player1:Deck,player2:Deck,player3:Deck,left:Deck;
        player1 = this.getCard(17);
        player2 = this.getCard(17);
        player3 = this.getCard(17);
        left = new Deck(this.deck);
        return {
            player1,
            player2,
            player3,
            left
        }
        // return [new Deck(),new Deck(),new Deck(),new Deck()]
    }
    private getCard(n:number):Deck{
        let newArr:Card[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.deck.shift() as Card);    
        }
        return new Deck(newArr)
    }
    private getRandomIndex(min:number,max:number){
        return Math.floor(Math.random() * (max - min) + min);
    }
}