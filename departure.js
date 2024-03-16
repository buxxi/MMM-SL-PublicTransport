function Departure(data) {
    this.TransportMode = data.line.transport_mode;
    this.LineNumber = data.line.id;
    this.Destination = data.destination;
    this.TimeTabledDateTime = data.scheduled;
    this.ExpectedDateTime = data.expected;
    this.JourneyDirection = data.direction_code;
    this.DisplayTime = data.display;
}

Departure.prototype.ToString = function() {
    return this.TransportMode+ ' ' + this.LineNumber;
}

module.exports = Departure;