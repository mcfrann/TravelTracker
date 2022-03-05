//------------ IMPORTS ---------------------

import './css/styles.css';
import './images/Untitled design (4).png';
import domUpdates from './DOM-updates';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
import fetchAPI from '../src/API-calls.js'

//-------------- QUERY SELECTORS ---------------



//--------------- GLOBAL VARIABLES ---------------

// const currentTraveler = null;
const fetchTravelers = fetchAPI.getAllTravelers();
const fetchTrips = fetchAPI.getAllTrips();
const fetchDestinations = fetchAPI.getAllDestinations();
const today = null;
// const allTrips = null;

//---------------- FUNCTIONS -----------------------

const renderPage = () => {
  Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
    .then(item => {
      const allTravelers = item[0].travelers
      const generatedTraveler = getRandomID(allTravelers);
      const currentTraveler = new Traveler(generatedTraveler)
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
      displayWelcome(currentTraveler);
      today = returnCurrentDate();
    })
}

const getRandomID = array => {
  const randomID = array[Math.floor(Math.random() * array.length)]
  return randomID
}

const returnCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = yyyy + '/' + mm + '/' + dd;
  console.log(today)
  return today
}

const displayWelcome = (currentTraveler) => {
  domUpdates.welcomeTraveler(currentTraveler);
}


//----------------- SCRIPTS ----------------------

window.onload = (event) => (event, renderPage());

//------------------ POST ------------------------