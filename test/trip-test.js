import {expect} from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import dataTest from './data-test';

describe('Trip', () => {
  let trip1;
  let trip2;
  let trip3;

  beforeEach (() => {
      trip1 = new Trip(dataTest.trip1);
      trip2 = new Trip(dataTest.trip2);
      trip3 = new Trip(dataTest.trip3);
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
    expect(trip1.id).to.to.equal(117);
    expect(trip2.id).to.to.equal(166);
    expect(trip3.id).to.to.equal(3);
  })
  
  it('should have an id of the traveler on a trip', () => {
    expect(trip1.userID).to.to.equal(1);
    expect(trip2.userID).to.to.equal(2);
    expect(trip3.userID).to.to.equal(3);
  })

  it('should have a destination id', () => {
    expect(trip1.destinationID).to.to.equal(28);
    expect(trip2.destinationID).to.to.equal(7);
    expect(trip3.destinationID).to.to.equal(22);
  })

  it('should show number of travelers', () => {
    expect(trip1.travelers).to.to.equal(3);
    expect(trip2.travelers).to.to.equal(2);
    expect(trip3.travelers).to.to.equal(4);
  })

  it('should show date of trip', () => {
    expect(trip1.date).to.to.equal("2021/01/09");
    expect(trip2.date).to.to.equal("2020/03/05");
    expect(trip3.date).to.to.equal("2022/05/22");
  })

  it('should show duration of trip in days', () => {
    expect(trip1.duration).to.to.equal(15);
    expect(trip2.duration).to.to.equal(6);
    expect(trip3.duration).to.to.equal(17);
  })

  it('should show status of trip', () => {
    expect(trip1.status).to.to.equal("approved");
    expect(trip2.status).to.to.equal("approved");
    expect(trip3.status).to.to.equal("approved");
  })

})

