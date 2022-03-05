//--------------QUERY SELECTORS--------------

const welcomeMessage = document.querySelector('.welcome-message')



//---------------UPDATES---------------------


const domUpdates = {
  welcomeTraveler(currentTraveler) {
    return welcomeMessage.innerHTML =  `Welcome back,<br> ${currentTraveler.returnFirstName()}!`;
  }

  // displayCurrentTrip() {

  // }
}

export default domUpdates