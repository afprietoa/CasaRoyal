import { getData } from "../helpers/getData.js";

// Get property id in sessionStorage
const propertyIdStr = sessionStorage.getItem('propertyByShow') 
? JSON.parse(sessionStorage.getItem('propertyByShow'))
: null;

const propertyId = propertyIdStr ? parseInt(propertyIdStr) : null;

// Get property data with method GET of request HTTP
const URL_PROP = `http://localhost:3000/properties/${propertyId}`;
const container = document.getElementById('cardContainer')

document.addEventListener('DOMContentLoaded', async () =>{
    try {
        const property = await getData(URL_PROP)
        container.innerHTML = `
            <div class="col-5">
                <img class="porterty-photo" src="${property.image}" alt="">
            </div>
            <div class="col-5 property-info">
                <span class="property-tag">${property.type} ${property.status}</span>
                <div class="property-block">
                    <div>
                        <h2 class="property-title">${property.title}</h2>
                        <h2 class="property-title">${property.type}</h2>
                    </div>
                    <div class="property-location">
                        <ion-icon name="radio-button-on-outline"></ion-icon>
                        <span>${property.city}, ${property.country_state}</span>
                    </div>
                    <P class="property-price">
                        From $ <span>${property.price}</span> Per Month
                    </P>
                    <ion-icon class="icon-play" name="play-circle-outline"></ion-icon>
                    <div class="property-features">
                        <div class="property-area property-content">
                            <img src="../assets/icons/Area Icon 2.png" alt="">
                            <div class="datum">
                                <span>${property.area_size}</span>
                                <span>Sq Ft</span>
                            </div>
                        </div>
                        <div class="property-beds property-content">
                            <img src="../assets/icons/Bedroom Icon 2.png" alt="">
                            <div class="datum">
                                <span>${property.bedrooms}</span>
                                <span>Beds</span>
                            </div>
                        </div>
                        <div class="property-bath property-content">
                            <img src="../assets/icons/Bathroom Icon 2.png" alt="">
                            <div class="datum">
                                <span>${property.bathrooms}</span>
                                <span>Baths</span>
                            </div>
                        </div>
                        <div class="property-garage property-content">
                            <img src="../assets/icons/Garage Icon 2.png" alt="">
                            <div class="datum">
                                <span>${property.garages}</span>
                                <span>Garage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        `
    } catch (error) {
        console.log
    }
});