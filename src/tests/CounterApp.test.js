import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe('Pruebas componente <CounterApp />', () => {

    let wrapper = shallow( <CounterApp />);
    let value;

    beforeEach( () => {
        value = 15;
        wrapper = shallow( <CounterApp value= { value }/>);
    })

    test("Debe renderizar el componente correctamente", () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test("Debe mostrar el valor que se pasa por props correctamente", () => {

        const textToFind = wrapper.find("h2").text();

        expect( parseInt(textToFind) ).toBe( value );
    })

    test("Debe de incrementar con el boton +1", () => {

        wrapper.find("button").at(0).simulate("click");
        const textToFind = wrapper.find("h2").text();

        expect( parseInt(textToFind) ).toBe(value + 1);
    })

    test("Debe de restar con el boton -1", () => {

        wrapper.find("button").at(2).simulate("click");
        const textToFind = wrapper.find("h2").text();

        expect( parseInt(textToFind) ).toBe(value - 1);
    })

    test("Debe de resetear con el boton reset", () => {

        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");
        const textToFind = wrapper.find("h2").text();

        expect( parseInt(textToFind) ).toBe( value );
    })

})
