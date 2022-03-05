class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = null;
    this.currentTrip = null;
  }

  returnFirstName() {
    return this.name.split(' ')[0]
  }

  // returnCurrentTrip() {
  //   this.trips.filter(trip => {
  //     let durationDates = trip.date
  //     if (trip.date === 
  //   })
  // }

}

export default Traveler

