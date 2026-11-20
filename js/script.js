// message de bienvenue 

document.addEventListener("DOMContentLoaded", function () {

    console.log("Bienvenue sur Découverte du Sénégal !");


    
    //  Boutton explorer maintenant
    

    const boutonExplorer = document.querySelector(".hero-content .btn");

    if (boutonExplorer) {

        boutonExplorer.addEventListener("click", function () {

            console.log("Bienvenue dans notre espace touristique !");

        });

    }


    //  Bouton en savoir plus 

    const boutonsDetails = document.querySelectorAll("#lieux .card .btn");

    boutonsDetails.forEach(function (bouton) {

        bouton.addEventListener("click", function () {

            const nomLieu = bouton
                .closest(".card")
                .querySelector(".card-title")
                .textContent;

            alert("Vous avez choisi de découvrir : " + nomLieu);

        });

    });


 
    //  Menu de navigation 

    const liensNavigation = document.querySelectorAll(".navbar-nav .nav-link");

    const menuNavigation = document.querySelector("#menuNavigation");

    liensNavigation.forEach(function (lien) {

        lien.addEventListener("click", function () {

            if (window.innerWidth < 992 && menuNavigation.classList.contains("show")) {

                const menuBootstrap = bootstrap.Collapse.getOrCreateInstance(menuNavigation);

                menuBootstrap.hide();

            }

        });

    });


});
