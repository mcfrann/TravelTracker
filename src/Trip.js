class Trip {
  constructor(allTrips) {
    this.id = null;
    this.userID = null;
    this.destinationID = null;
    this.travelers = null;
    this.date = null;
    this.duration = null;
    this.status = null;
    this.suggestedActivities = [];
    this.allTrips = allTrips;
  }
}

export default Trip