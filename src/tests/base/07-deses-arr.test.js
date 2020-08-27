const { retornaArreglo } = require("../../bases/07-deses-arr")

describe('Pruebas 07-deses-arr.js', () => {
    test('Debe de retornar un string y un num ', () => {
        const [ letras, nums ] = retornaArreglo();
        
        expect(letras).toBe("ABC");
        expect(typeof letras).toBe("string"); 

        expect(nums).toBe(123);
        expect(typeof nums).toBe("number");
    })
    
})
