import { expect } from "chai"; // Usar Chai para las aserciones
import UserValidator from "../src/usertest.js"; // Importar las validaciones

describe("Validaciones del modelo User", () => {
    describe("Validación de `name`", () => {
        it("Debería aceptar un `name` válido", () => {
            const validName = "UsuarioEjemplo";
            expect(() => UserValidator.validateName(validName)).to.not.throw();
        });

        it("Debería rechazar un `name` con números o caracteres especiales", () => {
            const invalidName = "Usuario123!";
            expect(() => UserValidator.validateName(invalidName)).to.throw(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });

        it("Debería rechazar un `name` mayor a 50 caracteres", () => {
            const longName = "a".repeat(51);
            expect(() => UserValidator.validateName(longName)).to.throw(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });
    });

    describe("Validación de `password`", () => {
        it("Debería aceptar un `password` válido", () => {
            const validPassword = "Password123!";
            expect(() => UserValidator.validatePassword(validPassword)).to.not.throw();
        });

        it("Debería rechazar un `password` mayor a 50 caracteres", () => {
            const longPassword = "a".repeat(51);
            expect(() => UserValidator.validatePassword(longPassword)).to.throw(
                "El campo 'password' debe ser válido (puede contener letras, números y caracteres especiales), con un máximo de 50 caracteres."
            );
        });

        it("Debería rechazar un `password` con caracteres no permitidos", () => {
            const invalidPassword = "password@!# $%"; // Espacio no permitido
            expect(() => UserValidator.validatePassword(invalidPassword)).to.throw(
                "El campo 'password' debe ser válido (puede contener letras, números y caracteres especiales), con un máximo de 50 caracteres."
            );
        });
    });
});
