const assert = require('assert');

const { expect } = require('chai');

const game = require('../src/script');


describe('checkWin', () => {
    const _ = undefined
    const X = 'X'
    const O = 'O'
    it('calls no winner for empty board', () => {
    expect(game.checkWin(
    [
    _, _, _,
    _, _, _,
    _, _, _,
    ]
    )).to.equal(null)
    })
    
    it('calls winner for X', () => {
    expect(game.checkWin(
    [
    _, _, x,
    x, o, x,
    _, o, x,
    ]
    )).to.equal(x)
    })
    
    it('calls winner for CIRCLE', () => {
    expect(game.checkWin(
    [
    _, _, o,
    x, o, x,
    o, o, x,
    ]
    )).to.equal(o)
    })
    })