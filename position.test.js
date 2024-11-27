import { expect } from "chai"; // Importar expect de Chai
import PositionValidator from "../src/positiontest.js"; // Ruta al archivo de validaciones

describe("Validaciones del modelo Position", () => {
    describe("Validación de `position_name`", () => {
        it("Debería aceptar un `position_name` válido", () => {
            const validName = "Software Engineer";
            expect(() => PositionValidator.validatePositionName(validName)).to.not.throw();
        });

        it("Debería rechazar un `position_name` con números o caracteres no permitidos", () => {
            const invalidName = "Manager123!";
            expect(() => PositionValidator.validatePositionName(invalidName)).to.throw(
                "El campo 'position_name' solo debe contener letras y tener un máximo de 50 caracteres."
            );
        });

        it("Debería rechazar un `position_name` mayor a 50 caracteres", () => {
            const longName = "a".repeat(51);
            expect(() => PositionValidator.validatePositionName(longName)).to.throw(
                "El campo 'position_name' solo debe contener letras y tener un máximo de 50 caracteres."
            );
        });
    });

    describe("Validación de `salary`", () => {
        it("Debería aceptar un `salary` válido con o sin el símbolo de $", () => {
            const validSalaries = ["75000", "$75000", "75000.50", "$75000.50"];
            validSalaries.forEach((salary) => {
                expect(() => PositionValidator.validateSalary(salary)).to.not.throw();
            });
        });

        it("Debería rechazar un `salary` con formato incorrecto", () => {
            const invalidSalaries = ["75,000", "75000.500", "$-75000", "75000$", "abc"];
            invalidSalaries.forEach((salary) => {
                expect(() => PositionValidator.validateSalary(salary)).to.throw(
                    "El campo 'salary' debe ser un número decimal válido con el símbolo opcional de '$'."
                );
            });
        });
    });
});
