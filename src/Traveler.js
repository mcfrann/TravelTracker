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


}



export default Traveler

