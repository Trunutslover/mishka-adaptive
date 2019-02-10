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