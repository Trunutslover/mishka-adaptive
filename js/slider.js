"use strict";

(function () {
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
})();