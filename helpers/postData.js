export const postData = async (URL, object) =>{
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {"Content-type" : "application/json; charset=UTF-8"}
        };
        const response = await fetch(URL, options);
        const data = await response.json();
        return data;    
    } catch (error) {
        console.log(error);
    }
};