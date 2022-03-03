import {expect} from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';


const destinationArg1 = {
  "id": 1,
  "destination": "Lima, Peru",
  "estimatedLodgingCostPerDay": 70,
  "estimatedFlightCostPerPerson": 400,
  "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  "alt": "overview of city buildings with a clear sky"
}

const destinationArg2 = {
  "id": 2,
  "destination": "Stockholm, Sweden",
  "estimatedLodgingCostPerDay": 100,
  "estimatedFlightCostPerPerson": 780,
  "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "city with boats on the water during the day time"
}

const destinationArg3 = {
  "id": 3,
  "destination": "Sydney, Austrailia",
  "estimatedLodgingCostPerDay": 130,
  "estimatedFlightCostPerPerson": 950,
  "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "alt": "opera house and city buildings on the water with boats"
}




describe('Destination', () => {
  let destination1;
  let destination2;
  let destination3;

  beforeEach (() => {
      destination1 = new Destination(destinationArg1);
      destination2 = new Destination(destinationArg2);
      destination3 = new Destination(destinationArg3);
  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('should be an instance of Destination', () => {
    expect(destination1).to.be.an.instanceOf(Destination);
    expect(destination2).to.be.an.instanceOf(Destination);
    expect(destination3).to.be.an.instanceOf(Destination);
  })

  it('should have an id', () => {
    expect(destination1.id).to.equal(1);
    expect(destination2.id).to.equal(2);
    expect(destination3.id).to.equal(3);
  })
  
  it('should have a destination', () => {
    expect(destination1.destination).to.equal("Lima, Peru");
    expect(destination2.destination).to.equal("Stockholm, Sweden");
    expect(destination3.destination).to.equal("Sydney, Austrailia");
  })

  it('should show estimated lodging cost per day', () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination2.estimatedLodgingCostPerDay).to.equal(100);
    expect(destination3.estimatedLodgingCostPerDay).to.equal(130);
  })

  it('should show estimated cost per person', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(400);
    expect(destination2.estimatedFlightCostPerPerson).to.equal(780);
    expect(destination3.estimatedFlightCostPerPerson).to.equal(950);
  })

  it('should have an image associated with the destination', () => {
    expect(destination1.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(destination2.image).to.equal("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    expect(destination3.image).to.equal("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  })

  it('should have alt text for the image', () => {
    expect(destination1.alt).to.equal("overview of city buildings with a clear sky");
    expect(destination2.alt).to.equal("city with boats on the water during the day time");
    expect(destination3.alt).to.equal("opera house and city buildings on the water with boats");
  })

})