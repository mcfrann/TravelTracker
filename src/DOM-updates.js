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
      // const iteratedPlaces = trip.destinations.map(place=> {
        counter ++
        displayTrips.innerHTML = `
        <section class="trip" id="${counter.toString()}">
          <h2 class="trip-title">${trip.destination.destination}</h2>
          <img class="tile-image" src="${trip.destination.image}" alt="${trip.destination.alt}"/>
          <p class="trip-description">Status is ${trip.status}! ${trip.travelers.toString()} travelers, ${trip.duration} days.</p>
        </section>
        `
      })
      return iteratedTrips
    // })
    }
}

export default domUpdates