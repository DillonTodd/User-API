import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('test');
    res.send('this is the homepage!');
})

app.listen(PORT, () => console.log(`Server running on port: http:localhost:${PORT}`));