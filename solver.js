const readline = require('readline-promise').default;
const {stdin: input, stdout:output} = require('process');
const solve = require('./algorithm');

const rl = readline.createInterface({input, output});

(async () => {
    const a = await rl.questionAsync('a = ');
    const b = await rl.questionAsync('b = ');
    const c = await rl.questionAsync('c = ');

    const answer = solve(a, b, c);

    console.log(`Equation is: (${a})*x^2 + (${b})*x + (${c})`);
    console.log(`${answer.size} roots was found`);
    console.log(answer);
    rl.close();
})();