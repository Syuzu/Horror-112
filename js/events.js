// IMAGE SLIDES & CIRCLES ARRAYS, & eventCounter
var EventSlides = document.getElementsByClassName('EventSlides');
var slidecircles = document.getElementsByClassName('slidecircle');
var leftSlideArrow = document.getElementById('leftSlideArrow');
var rightSlideArrow = document.getElementById('rightSlideArrow');
var eventCounter = 0;

// HIDE ALL IMAGES FUNCTION
function hideEvents() {
  for (var i = 0; i < EventSlides.length; i++) {
    EventSlides[i].classList.remove('visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function removeEventdots() {
  for (var i = 0; i < EventSlides.length; i++) {
    slidecircles[i].classList.remove('slidedot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function eventloop() {
  var currentImage = EventSlides[eventCounter];
  var currentDot = slidecircles[eventCounter];
  currentImage.classList.add('visible');
  removeEventdots();
  currentDot.classList.add('slidedot');
  eventCounter++;
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClickEvent(e) {
  var target = e.target;
  if (target == leftSlideArrow) {
    clearInterval(EventSlideshowInterval);
    hideEvents();
    removeEventdots();
    if (eventCounter == 1) {
      eventCounter = (EventSlides.length - 1);
      eventloop();
      EventSlideshowInterval = setInterval(eventslideshow, 10000);
    } else {
      eventCounter--;
      eventCounter--;
      eventloop();
      EventSlideshowInterval = setInterval(eventslideshow, 10000);
    }
  } 
  else if (target == rightSlideArrow) {
    clearInterval(EventSlideshowInterval);
    hideEvents();
    removeEventdots();
    if (eventCounter == EventSlides.length) {
      eventCounter = 0;
      eventloop();
      EventSlideshowInterval = setInterval(eventslideshow, 10000);
    } else {
      eventloop();
      EventSlideshowInterval = setInterval(eventslideshow, 10000);
    }
  }
}

leftSlideArrow.addEventListener('click', arrowClickEvent);
rightSlideArrow.addEventListener('click', arrowClickEvent);


// IMAGE SLIDE FUNCTION
function eventslideshow() {
  if (eventCounter < EventSlides.length) {
    eventloop();
  } else {
    eventCounter = 0;
    hideEvents();
    eventloop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(eventslideshow, 500);
var EventSlideshowInterval = setInterval(eventslideshow, 10000);