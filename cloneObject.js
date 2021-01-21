function cloneObject(objectToClone) {
    if (typeof objectToClone !== "object" || objectToClone === null) {
        return objectToClone; // Just return the value if objectToClone is not an Object type (including arrays)
    }

    // Check if we clone array or object and create appropriate initial empty value
    const deepCopy = Array.isArray(objectToClone) ? [] :
        Object.create(
            // We keep prototype of cloned object (i.e. to keep information about class type)
            Object.getPrototypeOf(objectToClone), {}
        );

    for (const [key, value] of Object.entries(objectToClone)) {
        // We need to recursively deep clone properties as these can also be nested objects
        deepCopy[key] = cloneObject(value);
    }

    return deepCopy;
}
