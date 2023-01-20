import { printCards } from "./printCards.js";

export const filterStatus = (statusList, propertiesArray, cardsContainer) =>{
    statusList.forEach( status => {
        const statusOption = document.getElementById(status)
        statusOption.addEventListener('click', () => {
            const statusDatum = statusOption.id;
            const filteredProperties = propertiesArray.filter(
                property.status == statusDatum
            );

            printCards(cardsContainer, filteredProperties);
        });
    });
};
