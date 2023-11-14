const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
  const { task, startTime, endTime } = req.body;
  tasks.push({ task, startTime, endTime, completed: false });
  res.redirect('/');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
