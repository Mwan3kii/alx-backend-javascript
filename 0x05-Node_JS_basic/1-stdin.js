// Displays user input message on new line
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on stdin (standard input)
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  process.stdout.write(`Your name is: ${input}\n`); // Using stdout.write to avoid automatic newline

  // Close stdin after input is received
  process.exit();
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
