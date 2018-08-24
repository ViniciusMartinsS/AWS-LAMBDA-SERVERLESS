'use strict';
const { MongoClient } = require('mongodb');

const hello = async (event, context) => {
    try {
        const connection = await MongoClient.connect('mongodb://vinicius:Vinicius123@ds133152.mlab.com:33152/heroes');
        const collection = connection.db('heroes').collection('heroes');
        const result = await collection.find().toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            }),
        };
    }
};
module.exports = { hello };
