const dataTest = {
  user1: {
    "id": 1,
    "name": "Ham Leadbeater",
    "travelerType": "relaxer"
    },
  
   user2: {
    "id": 2,
    "name": "Rachael Vaughten",
    "travelerType": "thrill-seeker"
    },
  
  user3: {
    "id": 3,
    "name": "Sibby Dawidowitsch",
    "travelerType": "shopper"
    },

  trip1: {
    "id": 117,
    "userID": 1,
    "destinationID": 28,
    "travelers": 3,
    "date": "2021/01/09",
    "duration": 15,
    "status": "approved",
    "suggestedActivities": []
  },

  trip2: {
    "id": 166,
    "userID": 2,
    "destinationID": 7,
    "travelers": 2,
    "date": "2020/03/05",
    "duration": 6,
    "status": "approved",
    "suggestedActivities": []
    },

  trip3: {
    "id": 3,
    "userID": 3,
    "destinationID": 22,
    "travelers": 4,
    "date": "2022/05/22",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": []
    },

  destination1: {
    "id": 28,
    "destination": "San Juan, Puerto Rico",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 900,
    "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
    "alt": "white and brown concrete buildings near sea under white clouds during daytime"
    },

  destination2: {
    "id": 7,
    "destination": "Paris, France",
    "estimatedLodgingCostPerDay": 100,
    "estimatedFlightCostPerPerson": 395,
    "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "alt": "city during the day time with eiffel tower"
    },

  destination3: {
    "id": 22,
    "destination": "Rome, Italy",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "people standing inside a colosseum during the day"
    }
}

export default dataTest;