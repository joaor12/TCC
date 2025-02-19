const connectDB = require('./db')
const express = require('express'); 
const cors = require('cors');

const controller = require('./controller');

const app = express();

app.use(cors());
app.use(express.json());
connectDB()


app.get('/quimera', async (req, res) => {  
    try {
        const response = await controller.quimera(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.get('/tubarao', async (req, res) => {  
    try {
        const response = await controller.tubarao(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.get('/raia', async (req, res) => {  
    try {
        const response = await controller.raia(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

app.get('/listaAnimais', async (req, res) => {  
    try {
        const response = await controller.listaAnimais(req, res);
        res.send(response);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//
