import express from 'express';
import foodRoute from './routes/foods.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/food', foodRoute);

app.listen(3000, () => {
    console.log('Connected Successfully');
})