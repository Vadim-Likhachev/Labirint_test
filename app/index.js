window.addEventListener('DOMContentLoaded', () => {

    // Реализация карусели на desktop

    const backButton = document.querySelector('.delivery_carousel_button_back');
    const forwardButton = document.querySelector('.delivery_carousel_button_forward');
    const carouselAdress = [...document.querySelectorAll('.delivery_carousel_adress')];

    let activeAdress = 0;

 

    function checkActiveButton() {
        if (activeAdress <= 0) {
            backButton.style.opacity = '0.25';
            backButton.disabled = true;
        } else {
            backButton.style.opacity = '1';
            backButton.disabled = false;
        }
    
        if (activeAdress === carouselAdress.length - 1) {
            forwardButton.style.opacity = '0.25';
            forwardButton.disabled = true;
        } else {
            forwardButton.style.opacity = '1';
            forwardButton.disabled = false;
        }
    }


    forwardButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (activeAdress >= 0 && activeAdress < carouselAdress.length - 1) {
            carouselAdress[activeAdress].classList.remove("active-adress");

            if (activeAdress > 0 && activeAdress < carouselAdress.length) {
                carouselAdress[activeAdress - 1].style.display = 'none';
                carouselAdress[activeAdress + 1].style.display = 'block';
            }

            activeAdress++;
            carouselAdress[activeAdress].classList.add("active-adress");
            checkActiveButton()
        }
    });


    backButton.addEventListener('click', (e) => {
            e.preventDefault();

            activeAdress = carouselAdress.findIndex(item => item.classList.contains('active-adress'));

            if (activeAdress >= 0 && activeAdress < carouselAdress.length) {
                carouselAdress[activeAdress].classList.remove("active-adress");

                if (activeAdress < carouselAdress.length - 1 && activeAdress > 0) {
                    carouselAdress[activeAdress + 1].style.display = 'none';
                    carouselAdress[activeAdress - 1].style.display = 'block';
                }
                activeAdress--;

                carouselAdress[activeAdress].classList.add("active-adress");
                checkActiveButton();
            }
    });

    // Реализация popup для мобильной версии

    const moreButton = document.querySelector('.footer_container_mobile_more-button');
    const closeButton = document.querySelector('.order_summury_popup_close_button');
    const popup = document.querySelector('.order_summury_popup');
    const page = document.querySelector('.page');
    

    moreButton.addEventListener('click', (e) => {
        e.preventDefault();

        popup.style.display = 'block';
        page.style.display = 'none';
    });

    closeButton.addEventListener('click', (e) => {
        e.preventDefault();

        page.style.display = 'block';
        popup.style.display = 'none';
    });

    
});