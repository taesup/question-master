const express = require('express');
const app = express();

const qm = require('./index');
const PORT = process.env.PORT || '8080';

app.use(express.static('public'));

app.use('/api/random', (req, res) => {
  const question = qm.getQuestion();
  const total = qm.getTotal();
  const remaining = qm.getRemaining();
  if (question) { res.json({ question, total, remaining }); }
  else { res.status(400).json({ message: 'No More Questions' }); }
});

app.use('/api/restart', (req, res) => {
  qm.restart();
  res.json({ message: "Questions Reset!" });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
