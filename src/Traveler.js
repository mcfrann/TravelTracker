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
    const currentYear = this.today.split('/')[0]
    const allTripTotal = this.trips.reduce((acc, trip) => {
      const tripYear = trip.date.split('/')[0]
      if (tripYear === currentYear) {
        const totalLodgingPerPerson = ((acc + trip.destination.estimatedLodgingCostPerDay) * trip.duration) / trip.travelers
        const flightPerPerson = acc + trip.destination.estimatedFlightCostPerPerson
        const totalWithoutPercent = totalLodgingPerPerson + flightPerPerson
        const tenPercent = totalWithoutPercent * .1
        const total = (totalWithoutPercent + tenPercent)
        const result = parseFloat(total).toFixed(2)
        return result
      }
      return acc
    }, 0)
    this.totalThisYear = allTripTotal
    return allTripTotal
  }
  
}



export default Traveler

