import moment from "moment";




//--------------QUERY SELECTORS--------------

const welcomeMessage = document.querySelector('.welcome-message');
const displayTrips = document.querySelector('.right-panel')
const displayInGlide = document.querySelector('.glide__slides');
const totalBanner = document.querySelector('.total-spent-banner');
const dropDown = document.querySelector('#list-places');
const estimatedCost = document.querySelector('.estimated-cost')
const rightPanel = document.querySelector('.right-panel')

//---------------UPDATES---------------------


const domUpdates = {
  welcomeTraveler(currentTraveler) {
    return welcomeMessage.innerHTML =  `Welcome back,<br> ${currentTraveler.returnFirstName()}!`;
  },

  displayTrips(userTrips) {
    let counter = 0
    rightPanel.innerHTML = ``
    const iteratedTrips = userTrips.forEach(trip => {
      const tripDate = moment(trip.date)
      counter ++
      if (tripDate.isBefore()) {
        rightPanel.innerHTML += `
        <section class="trip" id="${counter.toString()}">
            <h2 class="trip-title">${trip.destination.destination}</h2>
            <img class="tile-image" src="${trip.destination.image}" alt="${trip.destination.alt}"/>
            <p class="trip-description">Status was ${trip.status}!<br>
            ${trip.travelers.toString()} travelers, ${trip.duration} days.<br>
            When: ${trip.date} - (PASSED)</p>
        </section>
        `
      } else if (tripDate.isAfter()) {
        rightPanel.innerHTML += `
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
  },

  displayTotalSpent(currentTraveler) {
    if (currentTraveler.returnTotalSpent()) {
      totalBanner.innerHTML = `
      <h1 class="total-message"><i>You've spent a total of $${currentTraveler.totalThisYear} on adventures this year!</i></h1>
      `
    } else {
      totalBanner.innerHTML = `
      <h1 class="total-message"><i>You haven't been on any trips yet this year... book one below!</i></h1>
      `
    }
  },

  populateDestinationMenu(allDestinationObjs) {
    const allPlaces = allDestinationObjs.forEach(place => {
      dropDown.innerHTML += `
      <option id="${place.id}">${place.destination}</option>
      `
    })
  },

  showEstimatedCost(placeInput, durationInput, travelersInput, allDestinationObjs) {
    let total = null;
    const destName = placeInput.value
    const chosenDestination = allDestinationObjs.forEach(place => {
      if (place.destination === destName) {
        const totalWithoutPercent = (place.estimatedLodgingCostPerDay * durationInput.value) + (place.estimatedFlightCostPerPerson * travelersInput.value)
        const tenPercent = totalWithoutPercent * .1
        total = (totalWithoutPercent + tenPercent).toFixed(2)
      }
    })
    estimatedCost.innerHTML = `
    <p class="trip-message"><i>The estimated total cost of this trip is $${total}<i></p>
    `
  },

  clearEstimatedCost() {
    estimatedCost.innerHTML = `<p class="trip-message" id="succes-message"><i>Success! Your trip has been submitted for review!</i></p>`
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