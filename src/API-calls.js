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
}

export default fetchAPI;