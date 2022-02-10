const fsp = require('fs').promises;
const readline = require('readline-promise').default;
const {stdin: input, stdout:output} = require('process');
const solve = require('./algorithm');

const rl = readline.createInterface({input, output});

(async () => {
    let args;

    if(process.argv.length >= 3){
        let data;

        try{
            data = (await fsp.readFile(process.argv[2]));
        } catch (e){
            throw new Error('Path is incorrect');
        }

        data = data.toString().split('\n')[0].split(' ');
        args = [...data.map(a => +a)];

        args.forEach(arg => {
            if(isNaN(arg)){
                throw new Error('invalid argument type');
            }
        });
    } else {
        args = {a: NaN, b: NaN, c: NaN};

        for(let [key, value] of Object.entries(args)){
            while(true){
                value = +(await rl.questionAsync(key + ' = ')).trim();
                if(value === 0 || isNaN(value)){
                    console.log('Invalid argument type');
                    continue;
                }

                break;
            }

            args[key] = value;
        }

        args = [...Object.values(args)];
    }

    console.log(`Equation is: (${args[0]})*x^2 + (${args[1]})*x + (${args[2]})`);
    const answer = solve(...args);
    console.log(`${answer.size} roots was found`);

    let count = 0;
    answer.forEach(root => {
        console.log(`x${++count} = ${root}`);
    });

    rl.close();
})();