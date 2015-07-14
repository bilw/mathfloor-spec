/* globals describe it expect */

var RoundDown = require("../app/RoundDown");

describe('RoundDown', function() {
    it('should exist', function() {
        expect(RoundDown).toBeDefined();
    });
    it('should use a number to round with', function() {
        var round = RoundDown.create(5.59);
        expect(round.numberToRound()).toEqual(5.59);
    });
    it('should round down to nearest integer', function() {
        var round = RoundDown.create(4);
        expect(round.roundIt()).toEqual(round.numberToRound());
    });
});