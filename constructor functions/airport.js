(function () {

    'use strict'

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;

    }

    var person1 = new Person('Selena', 'Gacic');
    console.log(person1.getData());


    function Seat(number, category) {
        this.number = number;
        category ? this.category = category.charAt(0) : this.category = "e";
    }

    Seat.prototype.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }


    var seat1 = new Seat(22, "bussines");
    console.log(seat1.getData());


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
    }


    Passenger.prototype.getData = function () {
        return this.person.getData() + ", " + this.seat.getData();

    }

    var passenger1 = new Passenger(person1, seat1);
    console.log(passenger1.getData());


    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];
    }

    Flight.prototype.addPassenger = function (passenger) {
        this.listOfPassengers.push(passenger);
    }

    var flight1 = new Flight("Selevac", "8 mart 2018");
    flight1.addPassenger(passenger1);
    console.log(flight1.listOfPassengers);

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }

Airport.prototype.addFlight = function(flight) {
    this.listOfFlights.push(flight);
}
 
var airport1 = new Airport();
airport1.addFlight(flight1);
console.log(airport1.listOfFlights);





























})();