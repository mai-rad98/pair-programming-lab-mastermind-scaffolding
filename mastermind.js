const calculateHint = (secret, guess) => {
  let correctPositions = 0;
  let correctDigits = 0;
  const digitCount = new Array(10).fill(0);

  for (let i = 0; i < 4; i++) {
      if (secret[i] === guess[i]) {
          correctPositions++;
      } else {
          digitCount[parseInt(secret[i])] += 1;
      }
  }

  for (let i = 0; i < 4; i++) {
      if (secret[i] !== guess[i] && digitCount[parseInt(guess[i])] > 0) {
          correctDigits++;
          digitCount[parseInt(guess[i])] -= 1;
      }
  }

  return correctPositions + '-' + correctDigits;
};

const main = () => {
  const args = process.argv.slice(2);
  const secret = args[0];
  const numGuesses = parseInt(args[1]);
  const guesses = args.slice(2);

  for (let i = 0; i < numGuesses; i++) {
      const hint = calculateHint(secret, guesses[i]);
      process.stdout.write(hint + ' ');
  }

  process.stdout.write('\n');
};

main();
