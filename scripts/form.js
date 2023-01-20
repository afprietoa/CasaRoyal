import { getData } from "../helpers/getData.js";
import { submitForm } from "../modules/submitForm.js";

const URL_PROPS = 'http://localhost:3000/properties';

// 1. the form is captured
const form = document.querySelector('.form-container');

// 2. all child elements of the form are captured
const formChildren = Object.values(form);

// It is want to reuse the form to create and edit a property
const propertyIdStr = sessionStorage.getItem('propertyByUpdate') 
? JSON.parse(sessionStorage.getItem('propertyByUpdate')) 
: "";

const propertyId = propertyIdStr ? parseInt(propertyIdStr) : null;

const submitButton = formChildren[formChildren.length-1];

submitButton.innerHTML = propertyId ? 'Save Changes' : 'Create Property'

document.addEventListener('DOMContentLoaded', async () =>{
    let property = {};

    const URL = propertyId ? `${URL_PROPS}/${propertyId}` : URL_PROPS;

    try {
        if (propertyId){

            property = await getData(URL);

            formChildren.forEach((inputChild) => {
                if (inputChild.id){
                    inputChild.value = property[inputChild.id];
                }
            })
        }
        submitForm(form, URL, propertyId);
    } catch (error) {
        console.log(error);
    }
});