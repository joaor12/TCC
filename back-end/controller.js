const express = require('express');
const service = require('./service');

exports.quimera = async (req, res) => {
    try {
        const respostaQuimera = JSON.parse(req.query.respostaQuimera);
        const query = {};
        for(let index = 0; index < respostaQuimera.length; index++) {
            const resposta = respostaQuimera[index];
            query[resposta.coluna] = resposta.resposta;
        }

        const animal = await service.quimera(query);
    

        if (animal.length === 0) {
            return res.status(404).json({ error: "Animal não encontrado" });
        } 

        const especie = animal.Especie;
        return(especie);
       
    
    } catch (error) {
    console.log("error ==> ", error);
    }
};

