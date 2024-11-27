class CategoryValidator {
    // Validación del campo "name"
    static validateName(name) {
        // 1. Validación de que el nombre no esté vacío
        if (!name.trim()) {
            throw new Error("El campo 'name' no puede estar vacío.");
        }

        // 2. Validación de que el nombre no contenga solo espacios
        const regex = /^[a-zA-Z\s]{1,50}$/;
        if (!regex.test(name)) {
            throw new Error(
                "El campo 'name' debe contener solo letras y tener un máximo de 50 caracteres."
            );
        }

        // 3. Validación de que el nombre tenga al menos 3 caracteres
        if (name.length < 3) {
            throw new Error("El campo 'name' debe tener al menos 3 caracteres.");
        }

        // 4. Simulación de la validación de unicidad (ejemplo usando una lista de categorías existentes)
        const existingCategories = ["Electrónica", "Ropa", "Hogar"];  // Esta lista puede ser reemplazada por una consulta a la base de datos
        if (existingCategories.includes(name)) {
            throw new Error("El campo 'name' debe ser único.");
        }
    }
}

export default CategoryValidator;
