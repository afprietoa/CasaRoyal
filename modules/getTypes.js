export const getTypes = (properties) => {
    const propertyTypes  =  properties.map(
        property => `${property.type}`
    );
    const types = [...new Set(propertyTypes)];
    return types;
};