class CategoryValidator {
    // Validación del campo "name"
    static validateName(name) {
        const regex = /^[a-zA-Z\s]{1,50}$/;  // Solo letras y espacios, hasta 50 caracteres
        if (!regex.test(name)) {
            throw new Error(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        }
    }
}

export default CategoryValidator;
