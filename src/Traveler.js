class Traveler {
  constructor(allTravelers) {
    this.id = allTravelers.currentTraveler.id;
    this.name = allTravelers.currentTraveler.name;
    this.travelerType = allTravelers.currentTraveler.travelerType;
  }
}

export default Traveler