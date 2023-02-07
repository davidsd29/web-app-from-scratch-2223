window.addEventListener('DOMContentLoaded', () => {
    let loader = document.getElementById("preloader");

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

    //Enter business card
    function LogIn() {
        card.home.classList.add("zoomOut")
        card.info.classList.remove("hidden")
        card.info.classList.add("zoomIn")
        
        setTimeout(function () {
            card.home.classList.add("hidden")
            card.home.classList.remove("zoomOut")
            //card.info.classList.remove("zoomIn")
        }, 2500);

        card.home.addEventListener('animationend', () => {
            card.home.classList.remove("zoomOut")
            console.log("lalal");
        });
    }   
    
    //Close business card
    function Logout() {
        card.info.classList.add("close")
        card.home.classList.remove("hidden")
            
        setTimeout(function () {
            card.info.classList.add("hidden")
            card.info.classList.remove("close")
        }, 1500);
    }   
    
    function NextPage() {

        
            
    }   
    
    function PrevPage() {
            
  
    }

    function Loader(){
        //preloader 
        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);
    }

    button.homeBtn.addEventListener("click", LogIn);
    button.logOff.addEventListener("click", Logout);
    button.nextBtn.addEventListener("click", NextPage);
    button.prevBtn.addEventListener("click", PrevPage);

    console.log('DOM fully loaded and parsed');
});