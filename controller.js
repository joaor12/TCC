const express = require('express');
const { QuimeraModel } = require('./schema');

exports.quimera = async (req, res) => {
    try {
        const respostaQuimera = JSON.parse(req.query.respostaQuimera);
        const query = {};
        for (let index = 0; index < 1; index++) {
            const resposta = respostaQuimera[index];
            query[resposta.coluna] = resposta.resposta;
        }

    
        const animal = await QuimeraModel.findOne(query);
        const especie = animal.Especie;

        if (!animal) {
            return res.status(404).json({ error: "Animal não encontrado" });
        }

        return(especie);
       
    
    } catch (error) {
    console.log("error ==> ", error);
    }
};

