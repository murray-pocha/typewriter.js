const sentence = 'Hello there from Murray, I hope your having a wonderful day!';

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);

  delay += 50;

}

setTimeout(() => {
  console.log();
}, delay);

