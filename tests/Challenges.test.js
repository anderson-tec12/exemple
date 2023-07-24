const { describe, it, before, beforeEach, afterEach} = require("mocha");
const {expect} = require('chai')

const Challenges = require('../functions/Challenges');

const challenges = new Challenges()

describe('Challenges suite test', () => {
  it('Average calculation', () => {
    
    expect(
        challenges
        .calcMedia(25,75)
      ).to.be.equal(50)

    expect(
      challenges
      .calcMedia(10,10,10,10,9)
    ).to.be.equal(9.8)


    expect(
      challenges
      .calcMedia(10,9,6,8,9,1,5,7)
    ).to.be.equal(6.875)

    expect(
      challenges
      .calcMedia(2,5,7,1,-2)
    ).to.be.equal(2.6)

  })

  it('Turn a number into a repeating data structure without using repeating loops', () => {
    expect(
      challenges.chunks(1)
    ).to.be.equal('chunk')

    expect(
      challenges.chunks(4)
    ).to.be.equal('chunk-chunk-chunk-chunk')

    expect(
      challenges.chunks(2)
    ).to.be.equal('chunk-chunk')

    expect(
      challenges.chunks(8)
    ).to.be.equal('chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk')
  })

  it('Reverse values in array', () => {
    expect(
      challenges.reverseArray(['false', 'true', 'true', 'true'])
    ).to.deep.equals(['true','true','true','false'])

    expect(
      challenges.reverseArray([0,9,6,8,9,1,5,7])
    ).to.deep.equals([7,5,1,9,8,6,9,0])
  })

  it('order Of Magnitude', () => {
    expect(
      challenges
      .orderOfMagnitude('Hello')
    ).to.be.equal('o')

    expect(
      challenges
      .orderOfMagnitude('Its over nine thousand')
    ).to.be.equal('v')
  })
})