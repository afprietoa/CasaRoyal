export const getStatus = (properties) => {
    const propertyStatus = properties.map(
        property => `${property.status}`
    );
    const status = [...new Set(propertyStatus)];
    return status;
};