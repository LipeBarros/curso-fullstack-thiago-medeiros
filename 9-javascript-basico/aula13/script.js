let clientes = [
    {
        nome:'Thiago',
        idade: 35,
        linguagens: ['Javascript', 'python','php']
    },
    {
        nome:'Fulano',
        idade: 22,
        linguagens: ['c#', 'c++','c']
    },
    {
        nome:'Ciclano',
        idade: 32,
        linguagens: ['go', 'closure','r']
    }
]

for(let contador = 0; contador < clientes.length; contador++){
    console.log(clientes[contador].nome)
}