import { expect } from "chai"; // Usar Chai para las aserciones
import CategoryValidator from "../src/CategoryValidator.js"; // Importar el validador de categorías

describe("Validaciones del modelo Category", () => {
    describe("Validación de `name`", () => {
        it("Debería aceptar un `name` válido", () => {
            const validName = "Tecnologia";
            expect(() => CategoryValidator.validateName(validName)).to.not.throw();
        });

        it("Debería rechazar un `name` con números o caracteres especiales", () => {
            const invalidName = "Tecnología123!";
            expect(() => CategoryValidator.validateName(invalidName)).to.throw(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });

        it("Debería rechazar un `name` mayor a 50 caracteres", () => {
            const longName = "a".repeat(51); // Nombre de más de 50 caracteres
            expect(() => CategoryValidator.validateName(longName)).to.throw(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });

        it("Debería rechazar un `name` vacío", () => {
            const emptyName = "";
            expect(() => CategoryValidator.validateName(emptyName)).to.throw(
                "El campo 'name' no puede estar vacío."
            );
        });

        it("Debería rechazar un `name` con solo espacios", () => {
            const spacesOnlyName = "     ";
            expect(() => CategoryValidator.validateName(spacesOnlyName)).to.throw(
                "El campo 'name' no puede estar vacío."
            );
        });

        it("Debería rechazar un `name` con menos de 3 caracteres", () => {
            const shortName = "ab";
            expect(() => CategoryValidator.validateName(shortName)).to.throw(
                "El campo 'name' debe tener al menos 3 caracteres."
            );
        });
    });
});
