var RoundDown = {
    create: function(number) {
        return Object.create(RoundDown).init(number);
    },
    init: function(number) {
        this._number = number;
        return this;
    },
    numberToRound: function() {
        if(this._number === '') {
            console.log('please enter a number');
        }
        else if(isNaN(this._number)) {
            console.log('please enter a number using digits not a string');
        }
        else
            return this._number;
    },
    roundIt: function() {
        return Math.floor(this.numberToRound());
    }
};

module.exports = RoundDown;