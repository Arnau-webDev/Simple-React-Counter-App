const { getImagen } = require("../../bases/11-async-await")

describe('Pruebas async await', () => {
    test('Debe de retornar el url de la imagen', async () => {
        const url = await getImagen();

        console.log(url);
        expect(url.includes("https://")).toBe(true);
    })
    
})
