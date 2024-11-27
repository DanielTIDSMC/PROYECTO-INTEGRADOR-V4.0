import { expect } from "chai"; // Usar Chai para las aserciones
import SupplierValidator from "../src/suppliertest.js"; // Importar las validaciones

describe("Validaciones del modelo Supplier", () => {
    describe("Validación de name", () => {
        it("Debería aceptar un name válido", () => {
            const validName = "Proveedor Ejemplo";
            expect(() => SupplierValidator.validateName(validName)).to.not.throw();
        });

        it("Debería rechazar un name con números o caracteres no permitidos", () => {
            const invalidName = "Proveedor123!";
            expect(() => SupplierValidator.validateName(invalidName)).to.throw(
                "El campo 'name' solo debe contener letras y espacios, con un máximo de 50 caracteres."
            );
        });

        it("Debería rechazar un name mayor a 50 caracteres", () => {
            const longName = "a".repeat(51);
            expect(() => SupplierValidator.validateName(longName)).to.throw(
                "El campo 'name' solo debe contener letras y espacios, con un máximo de 50 caracteres."
            );
        });
    });

    describe("Validación de phone", () => {
        it("Debería aceptar un phone válido", () => {
            const validPhone = "1234567890";
            expect(() => SupplierValidator.validatePhone(validPhone)).to.not.throw();
        });

        it("Debería rechazar un phone con letras o caracteres adicionales", () => {
            const invalidPhone = "12345abcde";
            expect(() => SupplierValidator.validatePhone(invalidPhone)).to.throw(
                "El campo 'phone' solo debe contener números, con un máximo de 10 caracteres."
            );
        });

        it("Debería rechazar un phone mayor a 10 caracteres", () => {
            const longPhone = "12345678901";
            expect(() => SupplierValidator.validatePhone(longPhone)).to.throw(
                "El campo 'phone' solo debe contener números, con un máximo de 10 caracteres."
            );
        });
    });

    describe("Validación de email", () => {
        it("Debería aceptar un email válido", () => {
            const validEmail = "example@test.com";
            expect(() => SupplierValidator.validateEmail(validEmail)).to.not.throw();
        });

        it("Debería rechazar un email con formato incorrecto", () => {
            const invalidEmail = "example.com";
            expect(() => SupplierValidator.validateEmail(invalidEmail)).to.throw(
                "El campo 'email' debe ser válido y no superar los 50 caracteres."
            );
        });

        it("Debería rechazar un email mayor a 50 caracteres", () => {
            const longEmail = "a".repeat(41) + "@example.com";
            expect(() => SupplierValidator.validateEmail(longEmail)).to.throw(
                "El campo 'email' debe ser válido y no superar los 50 caracteres."
            );
        });
    });

    describe("Validación de contact_info", () => {
        it("Debería aceptar un contact_info válido", () => {
            const validContactInfo = "Calle 123, Ciudad Ejemplo, #202";
            expect(() => SupplierValidator.validateContactInfo(validContactInfo)).to.not.throw();
        });

        it("Debería rechazar un contact_info con caracteres no permitidos", () => {
            const invalidContactInfo = "Calle 123 @@@";
            expect(() => SupplierValidator.validateContactInfo(invalidContactInfo)).to.throw(
                "El campo 'contact_info' debe contener letras, números y caracteres especiales permitidos, con un máximo de 100 caracteres."
            );
        });

        it("Debería rechazar un contact_info mayor a 100 caracteres", () => {
            const longContactInfo = "a".repeat(101);
            expect(() => SupplierValidator.validateContactInfo(longContactInfo)).to.throw(
                "El campo 'contact_info' debe contener letras, números y caracteres especiales permitidos, con un máximo de 100 caracteres."
            );
        });
    });
});