class SupplierValidator {
    // Validación del campo "name"
    static validateName(name) {
        const regex = /^[a-zA-Z\s]{1,50}$/; // Solo letras y espacios, hasta 50 caracteres
        if (!regex.test(name)) {
            throw new Error(
                "El campo 'name' solo debe contener letras y espacios, con un máximo de 50 caracteres."
            );
        }
    }

    // Validación del campo "phone"
    static validatePhone(phone) {
        const regex = /^\d{1,10}$/; // Solo números, hasta 10 caracteres
        if (!regex.test(phone)) {
            throw new Error(
                "El campo 'phone' solo debe contener números, con un máximo de 10 caracteres."
            );
        }
    }

    // Validación del campo "email"
    static validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Formato válido de email
        if (!regex.test(email) || email.length > 50) {
            throw new Error(
                "El campo 'email' debe ser válido y no superar los 50 caracteres."
            );
        }
    }

    // Validación del campo "contact_info"
    static validateContactInfo(contactInfo) {
        const regex = /^[a-zA-Z0-9\s,.#-]{1,100}$/; // Letras, números, espacios, y algunos caracteres especiales permitidos
        if (!regex.test(contactInfo)) {
            throw new Error(
                "El campo 'contact_info' debe contener letras, números y caracteres especiales permitidos, con un máximo de 100 caracteres."
            );
        }
    }
}

export default SupplierValidator;