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
        const total = (totalWithoutPercent + tenPercent).toFixed(2)
        return total
      }
      return acc
    }, 0)
    this.totalThisYear = allTripTotal
    return allTripTotal




    // const currentYear = this.today.split('/')[0]
    // const totalPerPerson = 0;
    // const allTripTotal = this.trips.filter(trip => {
    //   const tripYear = trip.date.split('/')[0]
    //   if (tripYear === currentYear) {
    //     const totalLodging = trip.destination.estimatedLodgingCostPerDay * trip.duration
    //     const totalFlight = trip.destination.estimatedFlightCostPerPerson * trip.people
    //     const tenPercent = (totalLodging + totalFlight) * .1
    //     totalPerPerson = (totalLodging + totalFlight + tenPercent) / trip.people
    //   }
    // })
    // console.log(totalPerPerson)
    // return totalPerPerson
    // split date ('/), if dateArray[0] === '2022' then...
  }
}



export default Traveler

