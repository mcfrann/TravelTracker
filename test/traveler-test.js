import {expect} from 'chai';
import Traveler from '../src/Traveler';
import dataTest from './data-test';

describe('Traveler', () => {
  let traveler1;
  let traveler2;
  let traveler3;

  beforeEach (() => {
      traveler1 = new Traveler(dataTest.user1);
      traveler1.trips = [dataTest.trip1];
      traveler1.trips[0].destination = dataTest.destination1;
      traveler1.today = "2022/03/08"
      traveler2 = new Traveler(dataTest.user2);
      traveler2.trips = [dataTest.trip2];
      traveler2.trips[0].destination = dataTest.destination2;
      traveler2.today = "2022/03/08"
      traveler3 = new Traveler(dataTest.user3);
      traveler3.trips = [dataTest.trip3];
      traveler3.trips[0].destination = dataTest.destination3;
      traveler3.today = "2022/03/08"
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
    expect(traveler3).to.be.an.instanceOf(Traveler);
  })

  it('should have an id', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
    expect(traveler3.id).to.equal(3);
  })
  
  it('should have a name', () => {
    expect(traveler1.name).to.equal("Ham Leadbeater");
    expect(traveler2.name).to.equal("Rachael Vaughten");
    expect(traveler3.name).to.equal("Sibby Dawidowitsch");
  })

  it('should have a traveling type', () => {
    expect(traveler1.travelerType).to.equal("relaxer");
    expect(traveler2.travelerType).to.equal("thrill-seeker");
    expect(traveler3.travelerType).to.equal("shopper");
  })

  it('should have an array of travelers trips', () => {
    expect(traveler1.trips).to.eql([{
      "id": 117,
      "userID": 1,
      "destinationID": 28,
      "travelers": 3,
      "date": "2021/01/09",
      "duration": 15,
      "status": "approved",
      "suggestedActivities": [],
      "destination": {
        "id": 28,
        "destination": "San Juan, Puerto Rico",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 900,
        "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
        "alt": "white and brown concrete buildings near sea under white clouds during daytime"
        }
      }])
    expect(traveler2.trips).to.eql([{
      "id": 166,
      "userID": 2,
      "destinationID": 7,
      "travelers": 2,
      "date": "2020/03/05",
      "duration": 6,
      "status": "approved",
      "suggestedActivities": [],
      "destination": {
        "id": 7,
        "destination": "Paris, France",
        "estimatedLodgingCostPerDay": 100,
        "estimatedFlightCostPerPerson": 395,
        "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        "alt": "city during the day time with eiffel tower"
        }
      }])
    expect(traveler3.trips).to.eql([{
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2022/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": [],
      "destination": {
        "id": 22,
        "destination": "Rome, Italy",
        "estimatedLodgingCostPerDay": 90,
        "estimatedFlightCostPerPerson": 650,
        "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "people standing inside a colosseum during the day"
        }
      }])
  })

  it('should have a destination assigned to each trip', () => {
    expect(traveler1.trips[0].destination.destination).to.equal("San Juan, Puerto Rico")
    expect(traveler2.trips[0].destination.destination).to.equal("Paris, France")
    expect(traveler3.trips[0].destination.destination).to.equal("Rome, Italy")
  })

  it('should show todays date', () => {
    expect(traveler1.today).to.equal("2022/03/08")
    expect(traveler2.today).to.equal("2022/03/08")
    expect(traveler3.today).to.equal("2022/03/08")
  })

  it('should return a travelers first name', () => {
    const name1 = traveler1.returnFirstName()
    const name2 = traveler2.returnFirstName()
    const name3 = traveler3.returnFirstName()

    expect(name1).to.equal("Ham")
    expect(name2).to.equal("Rachael")
    expect(name3).to.equal("Sibby")
  })

  it('should return total spent on approved trips in a year plus 10%', () => {
    const cost1 = traveler1.returnTotalSpent()
    const cost2 = traveler2.returnTotalSpent()
    const cost3 = traveler3.returnTotalSpent()

    expect(cost1).to.equal(0)
    expect(cost2).to.equal(0)
    expect(cost3).to.equal('1135.75')
  })
})