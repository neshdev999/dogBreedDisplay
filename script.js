/* Drop Down */
function generateMainDropDown(breed) {
    const mainDropDownBase = mainDropDown(breed);
    $('.inputBreedMainDropDown').append(mainDropDownBase);
}

function mainDropDown(fetchBreed) {

    return `<select name="dogMainSelect" id="dog-select">
    <option value="">--Please choose an option--</option>
    ${generateOptions(fetchBreed)}<select>`;
}

function generateOptions(breed) {
    var retObject;
    for (let i = 0; i < breed.length; i++) {
        retObject = retObject + `<option value="${breed[i].id}">${breed[i].id}</option>`;
    }
    return retObject;
}

/* Random number generator */

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Generates Images after form submission */
function generateImage(responseJson) {

    let breedDogsMessageLength = responseJson.message.length;
    let receivedRandomIntegerValue = getRandomInteger(0, breedDogsMessageLength);

    $(".userOuputHolder").append(`<div class="dogImageContainer"><img class="dogImageStyle" src='${responseJson.message[receivedRandomIntegerValue]}' alt='dog'></div>`);
}

/* Generates Images on default page load */
function generateDefaultImages(responseJson) {
    let breedDogsMessageLength = responseJson.message.length;
    let receivedRandomIntegerValue = getRandomInteger(0, breedDogsMessageLength);

    $(".placeHolderImageHeaderContainer").append(`<div class="dogImageContainer"><img class="dogImageStyle" src='${responseJson.message[receivedRandomIntegerValue]}' alt='dog'></div>`);
}

function getDogImage(breedType, defaultValAvailCheck) {
    var getBreedType = breedType;
    // construct url
    var url = "https://dog.ceo/api/breed/" + getBreedType + "/images";
    fetch(url)
        .then(response => response.json())
        .then(
            responseJson => {
                if (defaultValAvailCheck === true) {
                    generateDefaultImages(responseJson);
                } else if (defaultValAvailCheck === false) {

                    generateImage(responseJson);
                }

            }
        )
        .catch(error => alert('Something went wrong. Try again later.'));
}

/* Handle actions after form submission */
function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        // Remove placeholder header
        if ($('.placeHolderHeader').length) {
            $(".placeHolderHeader").remove();
        }

        if ($('.dogImageContainer').length) {
            $(".dogImageContainer").remove();
        }

        if (($('#dog-select').val()) === "") {
            alert("Please select an option");
        } else {
            /* Get Breed of Dog From user */
            var userSelectedBreed = $('#dog-select').val();

            /* pass this value to fetching function */
            getDogImage(userSelectedBreed, false);

        }


    });
}

/* Generate random breed type */
function generateRandomBreed(breed) {
    let randomIntegerNumber = getRandomInteger(0, ((breed.length) - 1));
    let randomBreedType = breed[randomIntegerNumber].id;
    return randomBreedType;
}

/* Load three random dog images on page load */
function initialDefaultDogImages(breed) {
    let tempBreedHolder = generateRandomBreed(breed);
    getDogImage(tempBreedHolder, true);
}

/*Footer*/

function generateFooter() {
    const dogFooterBase = dogFooter();
    $('#footer').append(dogFooterBase);
}

function dogFooter() {
    return `<div class="footContain"><div class="footStyles"><span>&nbsp;Dogs Breed Panel&nbsp;&nbsp;<br></span><span>Nesh &copy; ${getCopyRightYear()}</span></div></div>`;
}

function getCopyRightYear() {
    return new Date().getFullYear();
}

$(window).bind("load", function() {
    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");
    positionFooter();

    function positionFooter() {
        footerHeight = $footer.height();
        footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";
        if (($(document.body).height() + footerHeight) < $(window).height()) {
            $footer.css({
                position: "absolute"
            }).animate({
                top: footerTop
            })
        } else {
            $footer.css({
                position: "static"
            })
        }
    }
    $(window)
        .scroll(positionFooter)
        .resize(positionFooter)
});

/* Initialize App */
$(function() {
    // get Breed List loaded First
    (async() => {
        let response = await fetch('https://dog.ceo/api/breeds/list/all');
        let responseJson = await response.json();
        const temp = await generateBreedsArray(responseJson);
        const breed = temp;
        generateMainDropDown(breed);
        initialDefaultDogImages(breed);
        watchForm();
        generateFooter();
    })();
});