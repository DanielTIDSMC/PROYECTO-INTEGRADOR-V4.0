import { expect } from "chai"; // Usar Chai para las aserciones
import RoleValidator from "../src/RoleValidator .js"; // Importar el validador de roles

describe("Validaciones del modelo Role", () => {
    describe("Validación de `name`", () => {
        it("Debería aceptar un `name` válido", () => {
            const validName = "administrador";
            expect(() => RoleValidator.validateName(validName)).to.not.throw();
        });

        it("Debería rechazar un `name` con números o caracteres especiales", () => {
            const invalidName = "Admin123!";
            expect(() => RoleValidator.validateName(invalidName)).to.throw(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });

        it("Debería rechazar un `name` mayor a 50 caracteres", () => {
            const longName = "a".repeat(51);
            expect(() => RoleValidator.validateName(longName)).to.throw(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });
    });
});
