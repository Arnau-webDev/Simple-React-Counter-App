import "@testing-library/jest-dom";

const { getSaludo } = require("../../bases/02-template-string");

describe('Pruebas en 02-template-string.js', () => {
    test('Prueba metodo getSaludo ', () => {
        const nombre = "ArnauMQ";

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( "Hola " + nombre);
    })
    
    test('Prueba metodo getSaludo sin argumento ', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( "Hola Carlos" );
    })
})
