'use strict';

//INstalamos o mongodb npm i --save mongodb
//Criamos uma conta na MLAB criamos database e um usuario
//para invocar nossa função localmente
//serverless invoke local -f heroes-create-martins --data '{"body": {"nome": "Flash", "poder": "Velocidade"}}'
const { MongoClient } = require('mongodb');

const hello = async (event, context) => {
    try {
        console.log('EVENT*****', event);
        const connection = await MongoClient.connect('mongodb://vinicius:Vinicius123@ds133152.mlab.com:33152/heroes');
        const collection = connection.db('heroes').collection('heroes');
        const { nome, poder } = JSON.parse(event.body);
        const result = await collection.insert({ nome, poder, dataInserção: new Date() });
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error interno do servidor',
                input: event,
            }),
        };
    }
};

module.exports = { hello };
