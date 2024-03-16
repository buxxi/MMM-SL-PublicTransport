function Departure(data) {
    console.log(data);
    this.TransportMode = data.line.transport_mode;
    this.LineNumber = data.line.id;
    this.Destination = data.destination;
    this.TimeTabledDateTime = data.scheduled;
    this.ExpectedDateTime = data.expected;
    this.JourneyDirection = data.direction_code;
    this.DisplayTime = data.display;
    console.log(this);
}

Departure.prototype.ToString = function() {
    return this.TransportMode+ ' ' + this.LineNumber;
}

module.exports = Departure;