//------------ IMPORTS ---------------------

import './css/styles.css';
import moment from 'moment';
import './images/Untitled design (4).png';
import './images/Untitled design (5).png';
import domUpdates from './DOM-updates';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
import fetchAPI from '../src/API-calls.js';

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
let allTripObjs = null;
let currentTraveler = null;
let allDestinationObjs = null;
let userTrips = null;

//---------------- FUNCTIONS -----------------------

const renderPage = () => {
  Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
    .then(item => {
      const allTravelers = item[0].travelers
      const generatedTraveler = getRandomID(allTravelers)
      currentTraveler = new Traveler(generatedTraveler, today)
      userTrips = item[1].trips.filter(trip => {
        if (trip.userID === currentTraveler.id) {
          return new Trip(trip)
        }
      })
      currentTraveler.trips = userTrips
      const tripDestinations = userTrips.forEach(trip => {
        const places = item[2].destinations.forEach(destination => {
          if (destination.id === trip.destinationID) {
            trip.destination = new Destination(destination)
          }
        })
        return places
      })
      allDestinationObjs = item[2].destinations.map(destination => new Destination(destination))
      allTripObjs = item[1].trips.map(trip => new Trip(trip))
      displayWelcome(currentTraveler)
      displayUserTrips(userTrips)
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

const displayUserTrips = (tripDestinations) => {
  domUpdates.displayTrips(tripDestinations);
}

const changeDestinationInput = () => {
  placeInput.value = placesList.options[placesList.selectedIndex].text;
  domUpdates.showEstimatedCost(placeInput, durationInput, travelersInput, allDestinationObjs);
}

const findIndexOfInput = () => {
  const dest = placeInput.value
  const destID = allDestinationObjs.find(place => place.destination === dest)
  return destID.id
}

//----------------- SCRIPTS ----------------------

window.onload = (event) => (event, renderPage());
placesList.onchange = changeDestinationInput;

//------------------ POST ------------------------

bookTripForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTrip = {
    id: allTripObjs.length + 1,
    userID: currentTraveler.id,
    destinationID: parseInt(findIndexOfInput()),
    travelers: parseInt(travelersInput.value),
    date: dateInput.value.replaceAll('-', '/'),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  };
  fetchAPI.postNewTrip(newTrip)
  userTrips.push(newTrip)
  domUpdates.displayTrips(userTrips)
  domUpdates.clearEstimatedCost()
  e.target.reset();
});