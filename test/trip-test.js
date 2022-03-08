import {expect} from 'chai';
import Trip from '../src/Trip';
import dataTest from './data-test';

describe('Trip', () => {
  let trip1;
  let trip2;
  let trip3;

  beforeEach (() => {
      trip1 = new Trip(dataTest.trip1);
      trip1.destination = dataTest.destination1;
      trip2 = new Trip(dataTest.trip2);
      trip2.destination = dataTest.destination2;
      trip3 = new Trip(dataTest.trip3);
      trip3.destination = dataTest.destination3;
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
    expect(trip1.id).to.equal(117);
    expect(trip2.id).to.equal(166);
    expect(trip3.id).to.equal(3);
  })
  
  it('should have an id of the traveler on a trip', () => {
    expect(trip1.userID).to.equal(1);
    expect(trip2.userID).to.equal(2);
    expect(trip3.userID).to.equal(3);
  })

  it('should have a destination id', () => {
    expect(trip1.destinationID).to.equal(28);
    expect(trip2.destinationID).to.equal(7);
    expect(trip3.destinationID).to.equal(22);
  })

  it('should show number of travelers', () => {
    expect(trip1.travelers).to.equal(3);
    expect(trip2.travelers).to.equal(2);
    expect(trip3.travelers).to.equal(4);
  })

  it('should show date of trip', () => {
    expect(trip1.date).to.equal("2021/01/09");
    expect(trip2.date).to.equal("2020/03/05");
    expect(trip3.date).to.equal("2022/05/22");
  })

  it('should show duration of trip in days', () => {
    expect(trip1.duration).to.equal(15);
    expect(trip2.duration).to.equal(6);
    expect(trip3.duration).to.equal(17);
  })

  it('should show status of trip', () => {
    expect(trip1.status).to.equal("approved");
    expect(trip2.status).to.equal("approved");
    expect(trip3.status).to.equal("approved");
  })

  it('should have an empty array of suggested activites', () => {
    expect(trip1.suggestedActivites).to.eql(undefined);
    expect(trip2.suggestedActivites).to.equal(undefined);
    expect(trip3.suggestedActivites).to.equal(undefined);
  })

  it('should have a destination assigned to each trip', () => {
    expect(trip1.destination).to.eql({
      "id": 28,
      "destination": "San Juan, Puerto Rico",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 900,
      "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
      "alt": "white and brown concrete buildings near sea under white clouds during daytime"
      })
    expect(trip2.destination).to.eql({
      "id": 7,
      "destination": "Paris, France",
      "estimatedLodgingCostPerDay": 100,
      "estimatedFlightCostPerPerson": 395,
      "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
      "alt": "city during the day time with eiffel tower"
      })
    expect(trip3.destination).to.eql({
      "id": 22,
      "destination": "Rome, Italy",
      "estimatedLodgingCostPerDay": 90,
      "estimatedFlightCostPerPerson": 650,
      "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "people standing inside a colosseum during the day"
      })
  })
})

