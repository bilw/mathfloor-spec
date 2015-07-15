/* globals describe it expect */

var RoundDown = require("../app/RoundDown");

describe('RoundDown', function() {
    it('exists', function() {
        expect(RoundDown).toBeDefined();
    });
    it('should use a number to round with', function() {
        var round = RoundDown.create(9.833);
        expect(round.numberToRound()).toEqual(9.833);
    });
    it('should round down to nearest integer', function() {
        var round = RoundDown.create(5.675);
        expect(round.roundIt()).toEqual(5);
    });
});