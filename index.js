const express = require('express');
const rotas = require('./routes/clinicasRoutes');
const mongoose = require('mongoose');
const app = express();
const porta = 3000;

app.use(express.json());

app.use('/clinicas', rotas);

require('dotenv').config();
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
app.listen(porta, () => console.log('Servidor rodando na porta: 3000'));})
    .catch((err) => console.log(err));
