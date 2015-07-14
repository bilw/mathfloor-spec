var RoundDown = {
    create: function(number) {
        return Object.create(RoundDown).init(number);
    },
    init: function(number) {
        this._number = number;
        return this;
    },
    numberToRound: function() {
        return this._number;
    },
    roundIt: function() {
        return Math.floor(this.numberToRound());
    }
};

module.exports = RoundDown;