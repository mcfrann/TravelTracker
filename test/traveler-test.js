import {expect} from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';


const user1 = {
  "id": 1,
  "name": "Ham Leadbeater",
  "travelerType": "relaxer"
  }

 const user2 = {
  "id": 2,
  "name": "Rachael Vaughten",
  "travelerType": "thrill-seeker"
  }

const user3 = {
  "id": 3,
  "name": "Sibby Dawidowitsch",
  "travelerType": "shopper"
  }


describe('Traveler', () => {
  let traveler1;
  let traveler2;
  let traveler3;

  beforeEach (() => {
      traveler1 = new Traveler(user1);
      traveler2 = new Traveler(user2);
      traveler3 = new Traveler(user3);
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
    expect(traveler1.id).to.to.equal(1);
    expect(traveler2.id).to.to.equal(2);
    expect(traveler3.id).to.to.equal(3);
  })
  
  it('should have a name', () => {
    expect(traveler1.name).to.to.equal("Ham Leadbeater");
    expect(traveler2.name).to.to.equal("Rachael Vaughten");
    expect(traveler3.name).to.to.equal("Sibby Dawidowitsch");
  })

  it('should have a traveling type', () => {
    expect(traveler1.travelerType).to.to.equal("relaxer");
    expect(traveler2.travelerType).to.to.equal("thrill-seeker");
    expect(traveler3.travelerType).to.to.equal("shopper");
  })

})