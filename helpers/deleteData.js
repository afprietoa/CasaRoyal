export const deleteData = async (URL) =>{
    try {
        const option = {
            method: 'DELETE'
        };
        await fetch(URL, option);   
    } catch (error) {
        console.log(error)        
    }
};