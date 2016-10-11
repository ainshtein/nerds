// -------- POPUP ------- //
var link = document.querySelector("#writeToUs");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content__close");
var userName = popup.querySelector("#user-name-field");
var userEmail = popup.querySelector("#user-email-field");
var userText = popup.querySelector("#email-text-field");
var form = popup.querySelector(".modal-content__form");
var storageName = localStorage.getItem("user-name");
var storageEmail = localStorage.getItem("user-email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay__show");
  popup.classList.add("modal-content__show");
  if(storageName) {
    userName.value = storageName;
    userEmail.focus();
  } else {
    userName.focus();
  };
  if(storageEmail) {
    userEmail.value = storageEmail;
    userText.focus();
  } else {
    userEmail.focus();
  };
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content__show");
  overlay.classList.remove("modal-overlay__show");
  popup.classList.remove("modal-error");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content__show");
  overlay.classList.remove("modal-overlay__show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    if(popup.classList.contains("modal-content__show")) {
      popup.classList.remove("modal-content__show");
      overlay.classList.remove("modal-overlay__show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function(event) {
  if(!userName.value || !userEmail.value || !userText) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("user-email", userEmail.value);
  }
});

// -------- MAP ------- //
ymaps.ready(init);

    function init(){
      var myMap = new ymaps.Map("map", {
            center: [59.93893306516795,30.320630078960445],
            zoom: 17,
            controls: []
        });

      var myPlacemark = new ymaps.Placemark(
        [59.938518540269264,30.321048503566757],
        { hintContent: 'NЁRDS DESIGN STUDIO',
         balloonContent: 'Студия веб-дизайна NЁRDS'
       },
       {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [231, 190],
        iconImageOffset: [120, -220]
       });

      myMap.behaviors.disable(['scrollZoom']);

      myMap.geoObjects.add(myPlacemark);
    }
