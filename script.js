/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton = document.getElementById("menu-button");

const navLinks = document.getElementById("nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});



/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING
===================================================== */

const navigationItems =
    document.querySelectorAll(".nav-links a");


navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});



/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationItems.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});