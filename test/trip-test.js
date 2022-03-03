import {expect} from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';


const tripArg1 = {
  "id": 1,
  "userID": 44,
  "destinationID": 49,
  "travelers": 1,
  "date": "2022/09/16",
  "duration": 8,
  "status": "approved",
  "suggestedActivities": []
}

const tripArg2 = {
  "id": 2,
  "userID": 35,
  "destinationID": 25,
  "travelers": 5,
  "date": "2022/10/04",
  "duration": 18,
  "status": "approved",
  "suggestedActivities": []
}

const tripArg3 = {
  "id": 3,
  "userID": 3,
  "destinationID": 22,
  "travelers": 4,
  "date": "2022/05/22",
  "duration": 17,
  "status": "approved",
  "suggestedActivities": []
}




describe('Trip', () => {
  let trip1;
  let trip2;
  let trip3;

  beforeEach (() => {
      trip1 = new Trip(tripArg1);
      trip2 = new Trip(tripArg2);
      trip3 = new Trip(tripArg3);
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
    expect(trip3).to.be.an.instanceOf(Trip);
  })

  it('should have an id', () => {
    expect(trip1.id).to.to.equal(1);
    expect(trip2.id).to.to.equal(2);
    expect(trip3.id).to.to.equal(3);
  })
  
  it('should have an id of the traveler on a trip', () => {
    expect(trip1.userID).to.to.equal(44);
    expect(trip2.userID).to.to.equal(35);
    expect(trip3.userID).to.to.equal(3);
  })

  it('should have a destination id', () => {
    expect(trip1.destinationID).to.to.equal(49);
    expect(trip2.destinationID).to.to.equal(25);
    expect(trip3.destinationID).to.to.equal(22);
  })

  it('should show number of travelers', () => {
    expect(trip1.travelers).to.to.equal(1);
    expect(trip2.travelers).to.to.equal(5);
    expect(trip3.travelers).to.to.equal(4);
  })

  it('should show date of trip', () => {
    expect(trip1.date).to.to.equal("2022/09/16");
    expect(trip2.date).to.to.equal("2022/10/04");
    expect(trip3.date).to.to.equal("2022/05/22");
  })

  it('should show duration of trip in days', () => {
    expect(trip1.duration).to.to.equal(8);
    expect(trip2.duration).to.to.equal(18);
    expect(trip3.duration).to.to.equal(17);
  })

  it('should show status of trip', () => {
    expect(trip1.status).to.to.equal("approved");
    expect(trip2.status).to.to.equal("approved");
    expect(trip3.status).to.to.equal("approved");
  })

  // it('should add to suggested activities', () => { /*check back */
  //   expect(trip1.travelers).to.to.equal(1);
  //   expect(trip2.travelers).to.to.equal(5);
  //   expect(trip3.travelers).to.to.equal(4);
  // })

})

