class PositionValidator {
    static validatePositionName(name) {
        const regex = /^[a-zA-Z\s]{1,50}$/;
        if (!regex.test(name)) {
            throw new Error(
                "El campo 'position_name' solo debe contener letras y tener un máximo de 50 caracteres."
            );
        }
    }

    static validateSalary(salary) {
        const regex = /^\$?\d+(\.\d{1,2})?$/;
        if (!regex.test(salary)) {
            throw new Error(
                "El campo 'salary' debe ser un número decimal válido con el símbolo opcional de '$'."
            );
        }
    }
}

export default PositionValidator; // Cambia module.exports por export default
