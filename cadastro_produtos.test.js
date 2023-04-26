const cadastro = require('./cadastro_produtos')

test('listar produtos sem  cadastrar deve retornar vazio', () =>{
    expect(cadastro.listar()).toEqual([]);
    expect(cadastro.listar (). length).toBe(0);

})