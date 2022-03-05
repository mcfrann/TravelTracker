import moment from 'moment';

class Traveler {
  constructor(traveler, today) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.trips = null;
    this.currentTrip = null;
    this.today = today;
  }

  returnFirstName() {
    return this.name.split(' ')[0]
  }

  returnTotalSpent() {
    const tripLodging = this.trips.reduce((acc, trip) => {
      const totalWithoutPercent = (acc + trip.estimatedLodgingCostPerDay) * trip.destination.estimatedLodgingCostPerDay
      const tenPercent = totalWithoutPercent * .1
      return totalWithoutPercent + tenPercent
    }, 0)
    return tripLodging
    // const tripCostPerPerson = this.trips.reduce
  }
}



export default Traveler

