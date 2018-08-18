const express = require('express');
const app = express();

const randomizer = require('./randomizer');
const PORT = process.env.PORT || '8080';

app.use(express.static('public'));

app.use('/api/random', (req, res) => {
  const question = randomizer.getQuestion();
  const total = randomizer.getTotal();
  const remaining = randomizer.getRemaining();
  if (question) { res.json({ question, total, remaining }); }
  else { res.status(400).json({ message: 'No More Questions' }); }
});

app.use('/api/restart', (req, res) => {
  randomizer.restart();
  res.json({ message: "Questions Reset!" });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
