const { getHeroeById, getHeroesByOwner } = require("../../bases/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas 08-imp-exp.test.js', () => {
   test('Debe retornar heroe segun id', () => {
       const id = 2;
       const myHero = getHeroeById(id);
       
       const heroeData = heroes.find( (h) => h.id === id);
       expect( myHero ).toEqual(heroeData);
   })

   test('Debe retornar undefined si no existe el heroe', () => {
    const id = 10;
    const myHero = getHeroeById(id);
    
    expect( myHero ).toBe(undefined);
})

    test("Debe retornar un array con todos los heroes con el mismo owner", () => {
        const owner = "Marvel";
        const heroesTest = getHeroesByOwner(owner);

        const myHeroesByOwner = heroes.filter( (heroe) => heroe.owner === owner );

        expect( heroesTest ).toEqual( myHeroesByOwner );
        expect( heroesTest.length ).toBe(2);
    })

    test("Debe retornar un array vacio con un owner que no existe", () => {
        const owner = "Mi abuela";
        const heroesTest = getHeroesByOwner(owner);

        expect( heroesTest ).toEqual([]);
    })
        
})
