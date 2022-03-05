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


//-------------- QUERY SELECTORS ---------------



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
      displayWelcome(currentTraveler);
      displayAllTrips(allTrips);
      domUpdates.displayTotalSpent(currentTraveler);
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

//----------------- SCRIPTS ----------------------

window.onload = (event) => (event, renderPage());

//------------------ POST ------------------------



export default today