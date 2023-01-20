export const printCards = (containerCards, arrayCards) => {
    containerCards.innerHTML = '';
    arrayCards.forEach((property) =>{
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
        <div class="top">
            <div class="overlay">
                <img id="${property.id}}" src="${property.image}" alt="${property.title}" class="card__img">
            </div>
            <div class="pos-top">
                <span>${property.type}</span>
                <span>${property.status}</span>
            </div>
            <div class="pos-contrs">
                <button class="card__edit" name="${property.id}">
                    <i class='bx bxs-pencil'></i>
                </button>
                <button class="card__delete" name="${property.id}">
                    <i class='bx bxs-trash-alt'></i>
                </button>
            </div>
            <div class="pos-bottom">
                <span>$ ${property.price}</span>
                <span name="${property.id}"><ion-icon name="heart-outline"></ion-icon></span>
            </div>
        </div>
        <div class="bottom">
            <div class="geopos">
                <ion-icon name="location-outline"></ion-icon>
                <span>${property.city},${property.country_state}</span>
            </div>
            <P>${property.title}</P>
            <div>
                <div class="avatar">
                    <img src="./assets/images/agent.png" alt="">
                    <span>Lionel Richie</span>
                </div>
                <div class="post">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span>${property.year} year ago</span>
                </div>
            </div>
            <div>
                <div class="inside-icons">
                    <img src="./assets/icons/Area Icon.png" alt="">
                    <span>${property.area_size} SqFt</span>
                </div>
                <div class="inside-icons">
                    <img src="./assets/icons/Garage Icon.png" alt="">
                    <span>${property.garages}</span>

                    <img src="./assets/icons/Bathroom Icon.png" alt="">
                    <span>${property.bedrooms}</span>

                    <img src="./assets/icons/Bedroom Icon.png" alt="">
                    <span>${property.bathrooms}</span>
                </div>
            </div>
        </div>
        `
        containerCards.appendChild(box);
    });
};