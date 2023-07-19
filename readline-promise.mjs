import readline from "readline/promises"
import process from "process"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('What is your favorite food? ', (answer) => {
    console.log(`Oh, so your favorite food is ${answer}`);
  });

  rl.on('line', (line) => {
    console.log(`Received: ${line}`);
  });

