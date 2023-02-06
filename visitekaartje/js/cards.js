window.addEventListener('DOMContentLoaded', () => {
    const card = {
    home: document.querySelector('.home-page'),
    info: document.querySelector('.info-page'),
    contact: document.querySelector('.contact-page'),
    skill: document.querySelector('.skill-page'),
};

    const button = {
    homeBtn: document.getElementById('screen-btn'),
    logOff: document.getElementById('logOff'),
    nextBtn: document.getElementById('next'),
    prevBtn: document.getElementById('prev'),
};



    function NextCard() {
        card.home.classList.add("zoomOut")
        card.info.classList.remove("hidden")
        card.info.classList.add("zoomIn")
            
        setTimeout(function () {
            card.home.classList.add("hidden")
            card.home.classList.remove("zoomOut")
        }, 800);
    }   
    
    function Logout() {
        card.info.classList.add("zoomOut")
        card.home.classList.remove("hidden")
        card.home.classList.add("zoomIn")
            
        setTimeout(function () {
            card.info.classList.add("hidden")
            card.info.classList.remove("zoomOut")
        }, 800);
    }   
    
    function NextPage() {
            
  
    }

    button.homeBtn.addEventListener("click", NextCard);
    button.logOff.addEventListener("click", Logout);

    console.log('DOM fully loaded and parsed');
});