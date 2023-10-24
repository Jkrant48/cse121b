//project


const touristSitesElement = document.querySelector("#Tourist-sites");

let touristlist = [];
let mySlideIndex = 1;

const displayTouristSites = async (Destinations) => {
    Destinations.forEach (function (destination)
    {
        const div = document.createElement("div");
        div.classList.add("mySlide");

        const h2 = document.createElement("h2");        
        h2.textContent = destination.touristSite;

        const img = document.createElement("img");
        img.src = destination.picture;
        img.alt = destination.touristSite;

        const h4 = document.createElement("h4");
        h4.textContent = destination.location;

        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(h4);
        touristSitesElement.appendChild(div);

        mySlideIndex = mySlideIndex + 2;
    
    });

    showSlides(mySlideIndex);
}

const plusSlides = (n) => {
    showSlides(mySlideIndex +=n);
};

const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlide");

    if (n > slides.length) {
        mySlideIndex = 1;
    }

    if (n < 1) {
        mySlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[mySlideIndex - 1].style.display = "block";
};

const getTouristSites = async() => {
    const response = await fetch("https://run.mocky.io/v3/ef71ef95-b428-4bf1-8e87-65b6675774e6");
    touristlist = await response.json();

    displayTouristSites(touristlist);
};



getTouristSites();


