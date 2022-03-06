const fetchAPI = {
  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
        .then(response => response.json())
  },

  // getSingleTraveler() {
  //   return fetch('http://localhost:3001/api/v1/travelers/'/*user id*/)
  //       .then(response => response.json())
  // },
  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
        .then(response => response.json())
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
        .then(response => response.json())
  },

  postNewTrip(newTrip) {
    fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrip)
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Please fill out all input fields!')
      } else {
        throw 'Your trip has been submitted for review!'
        return response.json()
      }
    })
  },
}

export default fetchAPI;