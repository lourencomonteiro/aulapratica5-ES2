const { createPlayer, deletePlayerById, getPlayerById, getPlayers, updatePlayer, players } =  require('./crudPlayer');

test('Adiciona um novo jogador', () => {
    const input = {
      id: '1',
      name: 'Hulk',
      age: 30,
      position: 'Atacante',
      number: 7
    };
  
    createPlayer(input);

    const expectedAnswer = {
        name: 'Hulk',
        age: 30,
        position: 'Atacante',
        number: 7
        };
  
    expect(players['1']).toEqual(expectedAnswer);
  });

test('Adicionando jogadores e obtendo jogadores', () => {
    createPlayer({id: "1", name: 'Hulk', age: 30, position: 'Atacante', number: 9})
    createPlayer({id: "2", name: 'Paulinho', age: 23, position: 'Atacante', number: 10})
    
    const expectedAnswer = {"1": {name: 'Hulk', age: 30, position: 'Atacante', number: 9}, "2": {name: 'Paulinho', age: 23, position: 'Atacante', number: 10}}

    expect(getPlayers()).toStrictEqual(expectedAnswer);
});

test('Deletando jogadores', () => {
    createPlayer({id: "1", name: 'Hulk', age: 30, position: 'Atacante', number: 9})
    createPlayer({id: "2", name: 'Paulinho', age: 23, position: 'Atacante', number: 10})
    deletePlayerById("2")
    
    let expectedAnswer = {"1": {name: 'Hulk', age: 30, position: 'Atacante', number: 9}}
    
    expect(players).toStrictEqual(expectedAnswer);
});