class EmployeeValidator {
    // Validación de "name", "paternal_surname" y "maternal_surname"
    static validateName(name) {
        const regex = /^[a-zA-Z]{1,50}$/; // Solo letras y máximo 50 caracteres
        if (!regex.test(name)) {
            throw new Error("El campo debe contener solo letras y tener un máximo de 50 caracteres.");
        }
    }

    static validateSurname(surname) {
        const regex = /^[a-zA-Z]{1,50}$/; // Solo letras y máximo 50 caracteres
        if (!regex.test(surname)) {
            throw new Error("El campo debe contener solo letras y tener un máximo de 50 caracteres.");
        }
    }

    // Validación de "hire_date" y "birth_date"
    static validateDate(date, isBirthDate = false) {
        // Expresión regular para fechas en formato dd/mm/yyyy o dd/mes/yyyy
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2]|[a-zA-Z]+)\/\d{4}$/;
        if (!regex.test(date)) {
            throw new Error("La fecha debe tener el formato válido: dd/mm/yyyy o dd/mes/yyyy.");
        }

        // Si es la fecha de nacimiento, verificar que no sea anterior a 1950
        if (isBirthDate) {
            const year = parseInt(date.split("/").pop());
            if (year < 1950) {
                throw new Error("La fecha de nacimiento no puede ser antes de 1950.");
            }
        }
    }
}

export default EmployeeValidator;