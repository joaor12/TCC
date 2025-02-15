const connectDB = require('./db')
const express = require('express'); 
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
connectDB()

app.get('/quimera', (req, res) => {
    res.send('Sua primeira requisicao');
}); 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//
