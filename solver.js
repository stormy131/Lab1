const fsp = require('fs').promises;
const readline = require('readline-promise').default;
const {stdin: input, stdout:output} = require('process');
const solve = require('./algorithm');

const rl = readline.createInterface({input, output});
const printOutput = (a, b, c) => {
    console.log(`Equation is: (${a})*x^2 + (${b})*x + (${c})`);

    const answer = solve(a, b, c);
    console.log(`${answer.size} roots was found`);

    let count = 0;
    answer.forEach(root => {
        console.log(`x${++count} = ${root}`);
    })

    rl.close();
};

(async () => {
    if(process.argv.length >= 3){
        let data = (await fsp.readFile(process.argv[2]))
            .toString()
            .split('\n')[0]
            .split(' ')

        printOutput(...data);
        return;
    }

    const a = await rl.questionAsync('a = ');
    const b = await rl.questionAsync('b = ');
    const c = await rl.questionAsync('c = ');

    printOutput(a,b,c);
})();