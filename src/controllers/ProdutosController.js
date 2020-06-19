const connection = require('../database/connection');

module.exports={
    async index(request, response) {
        const produtos = await connection('Produtos').select('*');
        return response.json(produtos);
},
    async create(request, response){

        const {idProdutos, nome, descricao, preco, linkcheckout, Categorias_idCategorias} = request.body;

        const id = await connection('Produtos').insert({
            idProdutos,
             nome,
             descricao,
             preco,
             linkcheckout,
             Categorias_idCategorias
         }, )
         return response.json(id[0]);
    }
};