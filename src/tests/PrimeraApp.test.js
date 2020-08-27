import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas de PrimeraApp', () => {
    // test('Debe demostrar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = "Hola, soy Goku";
    //     const { getByText } = render( <PrimeraApp saludo={saludo} /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('Debe demostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = "Hola, soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();
    })

    test("Debe de mostrar el subtitulo enviado por props", () => {

        const saludo = "Hola, soy Goku";
        const subtitulo = "Hola soy un subtitulo mi pana";

        const wrapper = shallow( 
            <PrimeraApp 
                saludo= {saludo}
                subtitulo = {subtitulo}
            />
        );

        const textoParrafo = wrapper.find("p").text();
        expect( textoParrafo ).toBe( subtitulo );
    })
      
})
