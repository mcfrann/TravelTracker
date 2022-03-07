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
const placeInput = document.getElementById('chosen-place');
const dateInput = document.querySelector('.trip-date-input');
const durationInput = document.querySelector('.trip-duration-input');
const travelersInput = document.querySelector('.trip-travelers-input');
const submit = document.querySelector('.submit-trip');
const username = document.getElementById('username');
const passwordInput = document.getElementById('password');
const login = document.querySelector('.login');
const loginPage = document.querySelector('.login-page');
const travelerDashboard = document.querySelector('.traveler-dashboard');

//--------------- GLOBAL VARIABLES ---------------

const fetchTravelers = fetchAPI.getAllTravelers();
const fetchTrips = fetchAPI.getAllTrips();
const fetchDestinations = fetchAPI.getAllDestinations();
const today = moment().format('YYYY/MM/DD');
let allTravelers = null;
let allTrips = null;
let currentTraveler = null;
let allDestinations = null;
let userTrips = null;
let userID = null;
// let password = null;

//---------------- FUNCTIONS -----------------------

//-----------------Login

const toggleHidden = (page) => {
  page.classList.toggle('hidden');
}

// const checkCred = (event) => { 
//   const userString = null;
//   const password = null;
//   if (username.value && passwordInput.value) {
//     event.preventDefault()
//     userString = username.value.slice(0, - 2)
//     console.log('user', userString)
//     userID = parseInt(username.value.slice(-2))
//     console.log('id', userID)
//     password = passwordInput.value
//     console.log("pass", password)
//   }
//   if (userString === "traveler" && password === "traveler" && userID < 51) {
//     loginToDashboard()
//   } else {
//     alert("Make sure your username and/or password are correct.")
//   }
// }

const loginToDashboard = () => {
  // checkCred()
  toggleHidden(loginPage);
  toggleHidden(travelerDashboard)
  renderPage();
}

const checkCred = () => {
  const userString = username.value.slice(0, - 2)
  userID = parseInt(username.value.slice(-2))
  if ((userString === 'traveler') && (userID < 51) && (passwordInput.value === 'traveler')) {
    loginToDashboard()
  } else {
    alert('Make sure your username and/or password are correct.')
  }
}

const navigateToUserDashboard = (event) => {
  if (username.value && passwordInput.value) {
    event.preventDefault()
    checkCred()
    console.log(userID)
  }
}

//------------------Main Dashboard

const renderPage = () => {
  Promise.all([fetchTravelers, fetchTrips, fetchDestinations])
    .then(item => {
      allTravelers = item[0].travelers.map(traveler => new Traveler(traveler, today))
      allTrips = item[1].trips.map(trip => new Trip(trip))
      allDestinations = item[2].destinations.map(destination => new Destination(destination))
      // instantiateClasses()
      assignCurrentUser()
      findUsersTrips()
      displayWelcome(currentTraveler)
      displayUserTrips(userTrips)
      domUpdates.populateDestinationMenu(allDestinations)
      domUpdates.displayTotalSpent(currentTraveler)
      console.log(currentTraveler)
    })
}

const assignCurrentUser = () => {
  currentTraveler = allTravelers.find(traveler => traveler.id === userID)
}

const findUsersTrips = () => {
  userTrips = allTrips.filter(trip => trip.userID === currentTraveler.id)
  currentTraveler.trips = userTrips
  const tripDestinations = userTrips.forEach(trip => {
    const places = allDestinations.forEach(destination => {
      if (destination.id === trip.destinationID) {
        trip.destination = destination
      }
    })
    return places
  })
}

const displayWelcome = (currentTraveler) => {
  domUpdates.welcomeTraveler(currentTraveler);
}

const displayUserTrips = (userTrips) => {
  domUpdates.displayTrips(userTrips);
}

const changeDestinationInput = () => {
  placeInput.value = placesList.options[placesList.selectedIndex].text;
  domUpdates.showEstimatedCost(placeInput, durationInput, travelersInput, allDestinations);
}

const findIndexOfInput = () => {
  const dest = placeInput.value
  const destID = allDestinations.find(place => place.destination === dest)
  return destID
}

//----------------- SCRIPTS ----------------------

// window.onload = (event) => (event, renderPage());
placesList.onchange = changeDestinationInput;
login.addEventListener('click', navigateToUserDashboard);

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
  newTrip["destination"] = findIndexOfInput()
  userTrips.push(newTrip)
  domUpdates.displayTrips(userTrips)
  domUpdates.clearEstimatedCost()
  e.target.reset();
});


/* PREVIOUS PROMISEALL

 // const allTravelers = item[0].travelers.map(traveler => new Traveler(traveler, today))
      // allTripObjs = item[1].trips.map(trip => new Trip(trip))
      // allDestinationObjs = item[2].destinations.map(destination => new Destination(destination))
      // const userSignIn = allTravelers.find(traveler => traveler.id === userID)
      // currentTraveler = new Traveler(userSignIn, today)
      // const generatedTraveler = getRandomID(allTravelers)
      // console.log(generatedTraveler)
      // userTrips = allTripObjs.filter(trip => trip.userID === currentTraveler.id)
      // currentTraveler.trips = userTrips
      // const tripDestinations = userTrips.forEach(trip => {
        //   const places = allDestinationObjs.forEach(destination => {
          //     if (destination.id === trip.destinationID) {
            //       trip.destination = destination
            //     }
            //   })
            //   return places
            // })
            
            */



            // const getRandomID = array => {
//   const randomID = array[Math.floor(Math.random() * array.length)]
//   return randomID
// }