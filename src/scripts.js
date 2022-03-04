//------------ IMPORTS ---------------------

import './css/styles.css';
import './images/travel-banner.jpg';
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

//---------------- FUNCTIONS -----------------------

const renderPage = () => {
  Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
    .then(item => {
      const allTravelers = item[0].travelers
      const generatedTraveler = getRandomID(allTravelers);
      const currentTraveler = new Traveler(generatedTraveler)
      const allTrips = item[1].trips
      
      const allDestinations = item[2].destinations.map(destination => new Destination(destination))
    })
}

const getRandomID = array => {
  const randomID = array[Math.floor(Math.random() * array.length)]
  return randomID
}


//----------------- SCRIPTS ----------------------

window.onload = (event) => (event, renderPage());

//------------------ POST ------------------------