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

        return(animal);
       
    
    } catch (error) {
    console.log("error ==> ", error);
    }
};

exports.tubarao = async (req, res) => {
    try {
        const respostaTubarao = JSON.parse(req.query.respostaTubarao);
        const query = {};
        for(let index = 0; index < respostaTubarao.length; index++) {
            const resposta = respostaTubarao[index];
            query[resposta.coluna] = resposta.resposta;
        }

        const animal = await service.tubarao(query);
    

        if (animal.length === 0) {
            return res.status(404).json({ error: "Animal não encontrado" });
        } 

        return(animal);
       
    
    } catch (error) {
    console.log("error ==> ", error);
    }
};

exports.raia = async (req, res) => {
    try {
        const respostaRaia = JSON.parse(req.query.respostaRaia);
        const query = {};
        for(let index = 0; index < respostaRaia.length; index++) {
            const resposta = respostaRaia[index];
            query[resposta.coluna] = resposta.resposta;
        }

        const animal = await service.raia(query);
    

        if (animal.length === 0) {
            return res.status(404).json({ error: "Animal não encontrado" });
        } 

        return(animal);
       
    
    } catch (error) {
    console.log("error ==> ", error);
    }
};

