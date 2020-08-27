describe('Pruebas en el archivo demo.test.js', () => {
    test( "Deben de ser iguales los strings", () => {
        // 1.Init
        const msg = "123";
    
        //2.Stimulous
        const msg2 = "123";
    
        // 3. Observe
        expect( msg ).toBe( msg2 );
    } )  
})

