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

const placesList = document.getElementById('list-places');
const bookTripForm = document.querySelector('.book-travel-form');
const placeInput = document.getElementById('chosen-place');
const dateInput = document.querySelector('.trip-date-input');
const durationInput = document.querySelector('.trip-duration-input');
const travelersInput = document.querySelector('.trip-travelers-input');
const username = document.getElementById('username');
const passwordInput = document.getElementById('password');
const login = document.querySelector('.login');
const loginPage = document.querySelector('.login-page');
const travelerDashboard = document.querySelector('.traveler-dashboard');
const submitButton = document.querySelector('.submit-button')

//--------------- GLOBAL VARIABLES ---------------

let fetchTravelers = fetchAPI.getAllTravelers();
let fetchTrips = fetchAPI.getAllTrips();
let fetchDestinations = fetchAPI.getAllDestinations();
let today = moment().format('YYYY/MM/DD');
let allTravelers = null;
let allTrips = null;
let currentTraveler = null;
let allDestinations = null;
let userTrips = null;
let userID = null;

//---------------- FUNCTIONS -----------------------

// Login

const toggleHidden = (page) => {
  page.classList.toggle('hidden');
};

const loginToDashboard = () => {
  renderPage();
  toggleHidden(loginPage);
  toggleHidden(travelerDashboard);
};

const checkCred = () => {
  const userString = username.value.slice(0, 8);
  userID = parseInt(username.value.slice(8));
  if ((userString === 'traveler') && (userID < 51) && (passwordInput.value === 'traveler')) {
    loginToDashboard();
  } else {
    alert('Make sure your username and/or password are correct.');
  };
};

const navigateToUserDashboard = (event) => {
  if (username.value && passwordInput.value) {
    event.preventDefault();
    checkCred();
  };
};

// Main Dashboard

const renderPage = () => {
  Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
    .then(item => {
      allTravelers = item[0].travelers.map(traveler => new Traveler(traveler, today))
      allTrips = item[1].trips.map(trip => new Trip(trip))
      allDestinations = item[2].destinations.map(destination => new Destination(destination))
      assignCurrentUser()
      findUsersTrips()
      displayWelcome(currentTraveler)
      displayUserTrips(userTrips)
      domUpdates.populateDestinationMenu(allDestinations)
      domUpdates.displayTotalSpent(currentTraveler)
    });
};

const assignCurrentUser = () => {
  currentTraveler = allTravelers.find(traveler => traveler.id === userID);
};

const findUsersTrips = () => {
  userTrips = allTrips.filter(trip => trip.userID === currentTraveler.id);
  currentTraveler.trips = userTrips;
  const tripDestinations = userTrips.forEach(trip => {
    const places = allDestinations.forEach(destination => {
      if (destination.id === trip.destinationID) {
        trip.destination = destination;
      };
    });
    return places;
  });
};

const displayWelcome = (currentTraveler) => {
  domUpdates.welcomeTraveler(currentTraveler);
};

const displayUserTrips = (userTrips) => {
  domUpdates.displayTrips(userTrips);
};

const changeDestinationInput = () => {
  placeInput.value = placesList.options[placesList.selectedIndex].text;
  domUpdates.showEstimatedCost(placeInput, durationInput, travelersInput, allDestinations);
};

const findIndexOfInput = () => {
  const dest = placeInput.value;
  const destID = allDestinations.find(place => place.destination === dest);
  return destID;
};

//----------------- SCRIPTS ----------------------

placesList.onchange = changeDestinationInput;
login.addEventListener('click', navigateToUserDashboard);
// submitButton.addEventListener('click', submitTrip)

//------------------ POST ------------------------

bookTripForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTrip = {
    id: allTrips.length + 1,
    userID: currentTraveler.id,
    destinationID: parseInt(findIndexOfInput().id),
    travelers: parseInt(travelersInput.value),
    date: dateInput.value.replaceAll('-', '/'),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  };
  fetchAPI.postNewTrip(newTrip)
  .then(() => {
    e.target.reset()
    fetchTravelers = fetchAPI.getAllTravelers();
    fetchTrips = fetchAPI.getAllTrips();
    fetchDestinations = fetchAPI.getAllDestinations();
    domUpdates.clearEstimatedCost()
  })
  .then(() => {
    renderPage()
  })
});

