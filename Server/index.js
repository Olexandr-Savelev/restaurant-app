const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db')
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080

const dishRouter = require('./routes/dish.router');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dish', dishRouter);

app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})