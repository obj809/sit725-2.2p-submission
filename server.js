const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

function add(a, b) {
  return a + b;
}

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const result = add(a, b);
  res.send(`${result}`);
});

app.post('/add', (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  const result = add(a, b);
  res.send(`${result}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
