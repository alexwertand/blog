import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
  res.render('index', {title: 'Main page'});
});

app.listen(PORT, () => {
  console.log(`Server is working via http://localhost:${PORT}`);
});