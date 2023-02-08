window.addEventListener("DOMContentLoaded", () => {
    
    const card = {
        home: document.querySelector(".home-page"),
        info: document.querySelector(".info-page"),
        contact: document.querySelector(".contact-page"),
        skill: document.querySelector(".skill-page"),
        preloader: document.getElementById("preloader"),
    };

    const button = {
        homeBtn: document.getElementById("screen-btn"),
        logOff: document.getElementById("logOff"),
        nextBtn: document.getElementById("next"),
        prevBtn: document.getElementById("prev"),
        refresh: document.getElementById("refresh"),
    };

    //Enter business card
    function LogIn() {
        card.home.classList.remove("float");
        card.home.classList.add("zoomIn");
        card.info.classList.remove("hidden");
        card.info.classList.add("zoomOut");
        
        setTimeout(function () {
            card.home.classList.add("hidden");
            card.home.classList.remove("zoomIn");
        }, 2500);
    }   
    
    //Close business card
    function Logout() {
        card.info.classList.add("close");
        card.home.classList.remove("hidden");
            
        setTimeout(function () {
            card.info.classList.add("hidden");
            card.info.classList.remove("close");
            card.home.classList.add("float");
        }, 1500);
    }   
    
    function NextPage() {
        if(card.contact.classList.contains("hidden")) {
            card.skill.classList.add("hidden");
            card.preloader.style.display = "block";
            button.refresh.classList.add("rotate");

            setTimeout(function () {
                card.preloader.style.display = "none";
                card.contact.classList.remove("hidden");
                button.refresh.classList.remove("rotate");
            }, 1000);
        } else PrevPage();
    }   
    
    function PrevPage() {
        if(card.skill.classList.contains("hidden")) {
            card.contact.classList.add("hidden");
            card.preloader.style.display = "block";
            button.refresh.classList.add("rotate");

            setTimeout(function () {
                card.preloader.style.display = "none";
                card.skill.classList.remove("hidden");
                button.refresh.classList.remove("rotate");
            }, 1000);
        } else NextPage();
    }    
    
    function RefreshPage() {
        card.skill.style.display = "none";
        card.contact.style.display = "none";
        card.preloader.style.display = "block";
        button.refresh.classList.add("rotate");

        setTimeout(function () {
            card.skill.style.display = "block";
            card.contact.style.display = "block";
            card.preloader.style.display = "none";
            button.refresh.classList.remove("rotate");
        }, 1000);
    }

    button.homeBtn.addEventListener("click", LogIn);
    button.logOff.addEventListener("click", Logout);
    button.nextBtn.addEventListener("click", NextPage);
    button.prevBtn.addEventListener("click", PrevPage);
    button.refresh.addEventListener("click", RefreshPage);

    console.log("DOM fully loaded and parsed");
});