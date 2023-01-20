import { postData } from "../helpers/postData.js";
import { putData } from "../helpers/putData.js";

// It is should to listen the submit event to create or update a property
export const submitForm = async (form, URL, propertyId) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const propertyData = {};
        const formChildren = Object.values(form);
        
        formChildren.forEach((inputChild) => {
            if(inputChild.id){
                propertyData[inputChild.id] = inputChild.value;
            }
        });
        //In order to prevent a property from being created or edited with missing information 
        
        // all labels should be captured in a variable
        const labelsNodeList = document.querySelectorAll('label');

        // it is should to convert node list to array
        const arrayLabels = [...labelsNodeList];

        const noEmptyFields = validateFields(arrayLabels, propertyData)
        // action to edit a property
        if(noEmptyFields && propertyId){
            await putData(URL, propertyData);
            Swal.fire(
                'Success!',
                'Property has been successfully updated!',
                'success'
            ).then(()=>{    
                window.location.href = "../index.html"
            })
        }
        //action to create a property
        if(noEmptyFields && !propertyId){
            await postData(URL, propertyData);
            Swal.fire(
                'Success!',
                'Property has been successfully created!',
                'success'
            ).then(()=>{
                // each form field is cleaned up
                formChildren.forEach((inputChild) => {
                    if(inputChild.id){
                        input.value = '';
                    }
                })
            })
        }

    })
}

const validateFields = (arrayLabels, propertyData) => {
    // it is should to map or create a new array with the labels keys
    const keyLabels = arrayLabels.map((key) => (
            {
                labelName: key.innerHTML,
                keyName: key.getAttribute('for')
            }
        ));

        let keyStr = "";
        for(const key in propertyData){
            const propertyAttribute = propertyData[key];

            if(!propertyAttribute){
                const labelFound = keyLabels.find(label => label.keyName === key);
                keyStr = labelFound.labelName + ",";
            }
        }

        if(keyStr){
            const emptyFieldsNum = countCharacters(',', keyStr);

            keyStr = keyStr.slice(0, -2);

            let message = emptyFieldsNum === 1
            ? `${keyStr} field was not completed` 
            : `${keyStr} field were not completed`;

            Swal.fire("Warning", message, "warning");
            return false;
        }
        return true;
}

const countCharacters = (delimiter, string) =>{
    const textString = string.split(delimiter);
    const arrayProperties = textString.filter((str) => str !== " ");
    return arrayProperties.length;
}