class Trip {
  constructor(trip, destination) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
  }

  // returnEstimatedTripTotal(trip, destination) {
  //   // (dest.costflight * trip.people) + (dest.costlodging * trip.duration) 
  //   // * .1 ... + 10%

   
  // }
}

export default Trip