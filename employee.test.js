import { expect } from "chai";
import EmployeeValidator from "../src/employee.js";

describe("Validaciones de Employee", () => {
    describe("Validación de name, paternal_surname y maternal_surname", () => {
        it("Debería aceptar un name válido", () => {
            const validName = "Juan";
            expect(() => EmployeeValidator.validateName(validName)).to.not.throw();
        });

        it("Debería rechazar un name con números o caracteres especiales", () => {
            const invalidName = "Juan123!";
            expect(() => EmployeeValidator.validateName(invalidName)).to.throw(
                "El campo debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });

        it("Debería aceptar un paternal_surname válido", () => {
            const validSurname = "Perez";
            expect(() => EmployeeValidator.validateSurname(validSurname)).to.not.throw();
        });

        it("Debería rechazar un paternal_surname con números o caracteres especiales", () => {
            const invalidSurname = "Perez123!";
            expect(() => EmployeeValidator.validateSurname(invalidSurname)).to.throw(
                "El campo debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });

        it("Debería aceptar un maternal_surname válido", () => {
            const validSurname = "Gomez";
            expect(() => EmployeeValidator.validateSurname(validSurname)).to.not.throw();
        });

        it("Debería rechazar un maternal_surname con números o caracteres especiales", () => {
            const invalidSurname = "Gomez@!";
            expect(() => EmployeeValidator.validateSurname(invalidSurname)).to.throw(
                "El campo debe contener solo letras y tener un máximo de 50 caracteres."
            );
        });
    });

    describe("Validación de hire_date y birth_date", () => {
        it("Debería aceptar una hire_date válida en formato dd/mm/yyyy", () => {
            const validHireDate = "01/09/2024";
            expect(() => EmployeeValidator.validateDate(validHireDate)).to.not.throw();
        });

        it("Debería aceptar una hire_date válida en formato dd/mes/yyyy", () => {
            const validHireDate = "01/septiembre/2024";
            expect(() => EmployeeValidator.validateDate(validHireDate)).to.not.throw();
        });

        it("Debería rechazar una hire_date con formato incorrecto", () => {
            const invalidHireDate = "2024/09/01";
            expect(() => EmployeeValidator.validateDate(invalidHireDate)).to.throw(
                "La fecha debe tener el formato válido: dd/mm/yyyy o dd/mes/yyyy."
            );
        });

        it("Debería aceptar un birth_date válido posterior a 1950", () => {
            const validBirthDate = "01/01/1980";
            expect(() => EmployeeValidator.validateDate(validBirthDate, true)).to.not.throw();
        });

        it("Debería rechazar un birth_date anterior a 1950", () => {
            const invalidBirthDate = "01/01/1949";
            expect(() => EmployeeValidator.validateDate(invalidBirthDate, true)).to.throw(
                "La fecha de nacimiento no puede ser antes de 1950."
            );
        });

        it("Debería rechazar un birth_date con formato incorrecto", () => {
            const invalidBirthDate = "1980/01/01";
            expect(() => EmployeeValidator.validateDate(invalidBirthDate, true)).to.throw(
                "La fecha debe tener el formato válido: dd/mm/yyyy o dd/mes/yyyy."
            );
        });
    });
});