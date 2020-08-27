import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe('Pruebas en 05-Funciones.test.js', () => {
    test("Debe retornar un objeto", () => {
        const userTest = {
            uid: "ABC123",
            username: "El_Papi1502"
        }

        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test("Debe retornar un objeto", () => {
        const user = "Paco";
        const userTest = {
            uid: "ABC567",
            username: user,
        } 

        const userActivo = getUsuarioActivo(user);
        expect(userActivo).toEqual(userTest);
    })
})
