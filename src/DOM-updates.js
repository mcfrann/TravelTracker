import moment from "moment";
// import Glide from '@glidejs/glide';



//--------------QUERY SELECTORS--------------

const welcomeMessage = document.querySelector('.welcome-message');
const displayTrips = document.querySelector('.right-panel')
const displayInGlide = document.querySelector('.glide__slides');

//---------------UPDATES---------------------


const domUpdates = {
  welcomeTraveler(currentTraveler) {
    return welcomeMessage.innerHTML =  `Welcome back,<br> ${currentTraveler.returnFirstName()}!`;
  },

  displayTrips(allTrips) {
    let counter = 0
    const iteratedTrips = allTrips.forEach(trip => {
      const tripDate = moment(trip.date)
      counter ++
      if (tripDate.isBefore()) {
        displayInGlide.innerHTML += `
        <li class="glide__slide" id="${counter.toString()}"/>
          HERE
        </li>
        `
      } else if (tripDate.isAfter()) {
        displayInGlide.innerHTML += `
        <li class="glide__slide" id="${counter.toString()}"/>
          There
        </li>
        `
      }
    })
    return iteratedTrips
  }
}

export default domUpdates


/*

HERE:
<section class="trip" id="${counter.toString()}">
            <h2 class="trip-title">${trip.destination.destination}</h2>
            <img class="tile-image" src="${trip.destination.image}" alt="${trip.destination.alt}"/>
            <p class="trip-description">Status was ${trip.status}!<br>
            ${trip.travelers.toString()} travelers, ${trip.duration} days.<br>
            When: ${trip.date} - (PASSED)</p>
          </section> */

          //THERE
          // <section class="trip" id="${counter.toString()}">
          //   <h2 class="trip-title">${trip.destination.destination}</h2>
          //   <img class="tile-image" src="${trip.destination.image}" alt="${trip.destination.alt}"/>
          //   <p class="trip-description">Status is ${trip.status}!<br>
          //   ${trip.travelers.toString()} travelers, ${trip.duration} days.<br>
          //   When: ${trip.date} - (UPCOMING)</p>
          // </section>