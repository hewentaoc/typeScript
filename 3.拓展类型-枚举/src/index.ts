import './demo.ts'
enum Level {
    level1 = 'a',
    level2 = 'b',
}

enum Numbers {
    num1,
    num2
}
let n:Numbers = Numbers.num1;
n = Numbers.num2;
let l:Level = Level.level1;
// console.log(Level.level1);
// console.log('n',n);

function getUsers(lev:Numbers){

}
getUsers(0);