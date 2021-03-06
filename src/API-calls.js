import { parseTwoDigitYear } from "moment"
import domUpdates from "./DOM-updates"

const fetchAPI = {
  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
        .then(response => response.json())
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
        .then(response => response.json())
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
        .then(response => response.json())
  },

  postNewTrip(newTrip) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrip)
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Enter the correct format in the fields.')
      } else {
        return response.json()
      }
    })
  },
}

export default fetchAPI;