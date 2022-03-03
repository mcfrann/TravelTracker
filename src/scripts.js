//------------ IMPORTS ---------------------

import './css/styles.css';
import './images/travel-banner.jpg'

//-------------- QUERY SELECTORS ---------------



//--------------- GLOBAL VARIABLES ---------------

const currentTraveler = null;
const fetchTravelers = fetchAPI.getAllTravelers();
const fetchTrips = fetchAPI.getAllTrips();
const fetchDestinations = fetch.getAllDestinations();

//---------------- FUNCTIONS -----------------------

const renderPage = () => {
  Promise.all(fetchTravelers, fetchTrips, fetchDestinations)
    .then(item => {
      const allTravelers = item[0].travelers.map(traveler => new Traveler(currentTraveler))
    })
}

const getRandomID = array => {

}


//----------------- SCRIPTS ----------------------



//------------------ POST ------------------------