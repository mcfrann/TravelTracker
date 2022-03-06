//------------ IMPORTS ---------------------

import './css/styles.css';
import moment from 'moment';
import './images/Untitled design (4).png';
import domUpdates from './DOM-updates';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
import fetchAPI from '../src/API-calls.js';
import Glide from '@glidejs/glide';

//---------------QUERY SELECTORS-----------------

const placesList = document.getElementById("list-places");
const bookTripForm = document.querySelector(".book-travel-form");
const placeInput = document.querySelector('#chosen-place');
const dateInput = document.querySelector('.trip-date-input');
const durationInput = document.querySelector('.trip-duration-input');
const travelersInput = document.querySelector('.trip-travelers-input');
const submit = document.querySelector('.submit-trip');

//--------------- GLOBAL VARIABLES ---------------

const fetchTravelers = fetchAPI.getAllTravelers();
const fetchTrips = fetchAPI.getAllTrips();
const fetchDestinations = fetchAPI.getAllDestinations();
const today = moment().format('YYYY/MM/DD');
const glide = new Glide('.glide').mount();

//---------------- FUNCTIONS -----------------------

const renderPage = () => {
  Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
    .then(item => {
      const allTravelers = item[0].travelers
      const generatedTraveler = getRandomID(allTravelers);
      const currentTraveler = new Traveler(generatedTraveler, today)
      const allTrips = item[1].trips.filter(trip => {
        if (trip.userID === currentTraveler.id) {
          return new Trip(trip)
        }
      })
      currentTraveler.trips = allTrips
      const tripDestinations = allTrips.forEach(trip => {
        const places = item[2].destinations.forEach(destination => {
          if (destination.id === trip.destinationID) {
            trip.destination = new Destination(destination)
          }
        })
        return places
      })
      const allDestinationObjs = item[2].destinations.map(destination => new Destination(destination))
      const allTripObjs = item[1].trips.map(trip => new Trip(trip))
      displayWelcome(currentTraveler);
      displayAllTrips(allTrips);
      domUpdates.populateDestinationMenu(allDestinationObjs)
      setTimeout(() => domUpdates.displayTotalSpent(currentTraveler), 400)
    })
}

const getRandomID = array => {
  const randomID = array[Math.floor(Math.random() * array.length)]
  return randomID
}

const displayWelcome = (currentTraveler) => {
  domUpdates.welcomeTraveler(currentTraveler);
}

const displayAllTrips = (tripDestinations) => {
  domUpdates.displayTrips(tripDestinations);
}

const changeDestinationInput = () => {
  placeInput.value = placesList.options[placesList.selectedIndex].text;
  // domUpdates.showEstimatedCost();
}

//----------------- SCRIPTS ----------------------

window.onload = (event) => (event, renderPage());
placesList.onchange = changeDestinationInput;

//------------------ POST ------------------------

// bookTripForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newTrip = {
//     "id": allTripObjs.length + 1,
//     "userID": currentTraveler.id,
//     "destinationID": null;
//     "travelers": travelersInput.value;
//     "date": dateInput.value.replaceAll('-', '/'),
//     "status": 'pending',
//     "suggestedActivities": []
//   };
//   fetchAPI.postNewTrip(newTrip);
//   e.target.reset();
// });
