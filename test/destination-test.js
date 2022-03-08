import {expect} from 'chai';
import Destination from '../src/Destination';
import dataTest from './data-test';

describe('Destination', () => {
  let destination1;
  let destination2;
  let destination3;

  beforeEach (() => {
      destination1 = new Destination(dataTest.destination1);
      destination2 = new Destination(dataTest.destination2);
      destination3 = new Destination(dataTest.destination3);
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
    expect(destination1.id).to.equal(28);
    expect(destination2.id).to.equal(7);
    expect(destination3.id).to.equal(22);
  })
  
  it('should have a destination', () => {
    expect(destination1.destination).to.equal("San Juan, Puerto Rico");
    expect(destination2.destination).to.equal("Paris, France");
    expect(destination3.destination).to.equal("Rome, Italy");
  })

  it('should show estimated lodging cost per day', () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination2.estimatedLodgingCostPerDay).to.equal(100);
    expect(destination3.estimatedLodgingCostPerDay).to.equal(90);
  })

  it('should show estimated cost per person', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(900);
    expect(destination2.estimatedFlightCostPerPerson).to.equal(395);
    expect(destination3.estimatedFlightCostPerPerson).to.equal(650);
  })

  it('should have an image associated with the destination', () => {
    expect(destination1.image).to.equal("https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80");
    expect(destination2.image).to.equal("https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80");
    expect(destination3.image).to.equal("https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  })

  it('should have alt text for the image', () => {
    expect(destination1.alt).to.equal("white and brown concrete buildings near sea under white clouds during daytime");
    expect(destination2.alt).to.equal("city during the day time with eiffel tower");
    expect(destination3.alt).to.equal("people standing inside a colosseum during the day");
  })
})