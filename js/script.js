var mainMenuHandler = function () {
    if (document.documentElement.clientWidth < 768) {

        var menuButton = document.querySelector(".main-nav__button");
        var menuItems = document.querySelectorAll(".main-nav__main-menu-item");

        menuButton.classList.remove("visually-hidden");

        for (var i = 0; i < menuItems.length; i++) {
            if (!menuItems[i].classList.contains("main-nav__main-menu-item--logo")) {
                menuItems[i].classList.add("main-nav__main-menu-item--closed");
            }
        }

        menuButton.addEventListener("click", function (evt) {
            evt.preventDefault();
            menuButton.classList.toggle("main-nav__button--menu-open");

            for (var i = 0; i < menuItems.length; i++) {
                if (!menuItems[i].classList.contains("main-nav__main-menu-item--logo")) {
                    menuItems[i].classList.toggle("main-nav__main-menu-item--closed");
                }
            }
        });
    }
}

mainMenuHandler();

//Код слайдера

var slider = document.querySelector (".reviews__slides");
var prevButton = document.querySelector(".reviews__back");
var nextButton = document.querySelector(".reviews__forward");

var buttonsAvailabilityCheck = function () {
    if (slider.classList.contains("reviews__slides--show-1")) {
        prevButton.setAttribute("disabled", "disabled");
    } else {
        prevButton.removeAttribute("disabled");
    }

    if (slider.classList.contains("reviews__slides--show-3")) {
        nextButton.setAttribute("disabled", "disabled");
    } else {
        nextButton.removeAttribute("disabled");
    }
}

var prevButtonClickHandler = function () {
    if (slider.classList.contains("reviews__slides--show-3")) {
        slider.classList.remove("reviews__slides--show-3");
        slider.classList.add("reviews__slides--show-2");
    } else if (slider.classList.contains("reviews__slides--show-2")) {
        slider.classList.remove("reviews__slides--show-2");
        slider.classList.add("reviews__slides--show-1");
    }

    buttonsAvailabilityCheck();
}

var nextButtonClickHandler = function () {
    if (slider.classList.contains("reviews__slides--show-1")) {
        slider.classList.remove("reviews__slides--show-1");
        slider.classList.add("reviews__slides--show-2");
    } else if (slider.classList.contains("reviews__slides--show-2")) {
        slider.classList.remove("reviews__slides--show-2");
        slider.classList.add("reviews__slides--show-3");
    }

    buttonsAvailabilityCheck();
}

buttonsAvailabilityCheck();
prevButton.addEventListener("click", prevButtonClickHandler);
nextButton.addEventListener("click", nextButtonClickHandler);