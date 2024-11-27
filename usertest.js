class UserValidator {
    // Validación del campo "name"
    static validateName(name) {
        const regex = /^[a-zA-Z]{1,50}$/; // Solo letras, hasta 50 caracteres
        if (!regex.test(name)) {
            throw new Error(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        }
    }

    // Validación del campo "password"
    static validatePassword(password) {
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|-]{1,50}$/; // Letras, números y caracteres especiales
        if (!regex.test(password) || password.length > 50) {
            throw new Error(
                "El campo 'password' debe ser válido (puede contener letras, números y caracteres especiales), con un máximo de 50 caracteres."
            );
        }
    }
}

export default UserValidator;
