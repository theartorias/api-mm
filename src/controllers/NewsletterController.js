const connection = require('../database/connection');

module.exports={
    
    async create(request, response){

        const {id, email, data_entrada} = request.body;

        const aux = await connection('newsletter').insert({
            id,
            email,
            data_entrada,
             
         }, )
         return response.json(aux[0]);
    }
};