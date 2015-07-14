var RoundDown = {
    create: function(number) {
        return Object.create(RoundDown).init(number);
    },
    init: function(number) {
        this._number = number;
        return this;
    },
    number: function() {
        return this._number;
    },
    roundIt: function() {
        return Math.floor(this.number());
    }
};

module.exports = RoundDown;