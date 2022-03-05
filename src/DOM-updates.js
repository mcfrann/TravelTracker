import moment from "moment";

//--------------QUERY SELECTORS--------------

const welcomeMessage = document.querySelector('.welcome-message');
const displayTrips = document.querySelector('.right-panel')

//---------------UPDATES---------------------


const domUpdates = {
  welcomeTraveler(currentTraveler) {
    return welcomeMessage.innerHTML =  `Welcome back,<br> ${currentTraveler.returnFirstName()}!`;
  },

  displayTrips(allTrips) {
    let counter = 0
    const iteratedTrips = allTrips.forEach(trip => {
        counter ++
        const tripDate = moment(trip.date)
        if (tripDate.isBefore()) {
          displayTrips.innerHTML = `
          <section class="trip" id="${counter.toString()}">
            <h2 class="trip-title">${trip.destination.destination}</h2>
            <img class="tile-image" src="${trip.destination.image}" alt="${trip.destination.alt}"/>
            <p class="trip-description">Status was ${trip.status}!<br>
            ${trip.travelers.toString()} travelers, ${trip.duration} days.<br>
            When: ${trip.date} - (PASSED)</p>
          </section>
          `
        } else if (tripDate.isAfter()) {
          displayTrips.innerHTML = `
          <section class="trip" id="${counter.toString()}">
            <h2 class="trip-title">${trip.destination.destination}</h2>
            <img class="tile-image" src="${trip.destination.image}" alt="${trip.destination.alt}"/>
            <p class="trip-description">Status is ${trip.status}!<br>
            ${trip.travelers.toString()} travelers, ${trip.duration} days.<br>
            When: ${trip.date} - (UPCOMING)</p>
          </section>
          `
        }
      })
      return iteratedTrips
    }
}

export default domUpdates