export const putData = async (URL, object) =>{
    try {
        const options = {
            method:  'PUT',
            body: JSON.stringify(object),
            headers: {"Content-type" : "application/json; charset=UTF-8"}
        };
        const response = await fetch(URL, options);
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}