
(function () {
    'use strict'
    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(this.name.length - 1);
        var result = firstLetter + lastLetter;
        return result.toUpperCase();
    }
    // var g1 = new Genre("action");
    // // console.log(g1.getData());

    function Movie(title, genre, duration) {
        this.title = title;
        this.genre = new Genre(genre).getData();
        this.duration = duration;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.duration + "min, " + this.genre;
    }

    // var m1 = new Movie("Paca", "comedy", 22);
    // // console.log(m1.getData());
    // var m2 = new Movie("Onko", "action", 32);



    function Program(date) {
        this.date = date;    
        this.listOfMovies = [];
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }

    Program.prototype.getData = function () {
        var sumLength = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            sumLength += this.listOfMovies[i].duration;
        }

        var date = this.date;
        var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        var result = dateStr + ", duration of festival is " + sumLength + " minutes" + "\n";

        for (var i = 0; i < this.listOfMovies.length; i++) {
            result += "\t\t" + this.listOfMovies[i].getData() + "\n";
        }

        return result;
    }


    // var p1 = new Program("12 feb 2019");
    // p1.addMovie(m1);
    // // console.log(p1.listOfMovies);
    // p1.addMovie(m2);
    // var p2 = new Program("15 feb 2019");
    // p2.addMovie(m1);
    // p2.addMovie(m2);

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMovies = 0;
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }

    Festival.prototype.getData = function () {
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            this.numOfMovies += this.listOfPrograms[i].listOfMovies.length;
        }
        var result = "Festival " + this.name + " has " + this.numOfMovies + " movie titles" + "\n";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            result += "\t" + this.listOfPrograms[i].getData() + "\n";
        }
        return result;

    }


    // var f1 = new Festival("Prcalje");
    // f1.addProgram(p1);
    // f1.addProgram(p2);
    // console.log(p1.listOfMovies);
    // console.log(f1.name);

    // console.log(f1.listOfPrograms[0]);

    // console.log(p1.getData());
    // console.log(f1.getData());
    // console.log(f1.listOfPrograms);

    function createMovie(title, duration, genre) {
        return new Movie(title, genre, duration)
    }

    function createProgram(dateStr) {
       var date = new Date(dateStr);
        var program = new Program(date)
        return program;
    }
    var fest = new Festival("Pacofil");
    var prog1 = createProgram("3 mart 2018");
    var prog2 = createProgram("22 mart 2018");
    var mov1 = createMovie("Paca lepotica", 25, "comedy");
    var mov2 = createMovie("Onko zavodnik", 26, "action");
    prog1.addMovie(mov1);
    prog1.addMovie(mov2);
    prog2.addMovie(mov1);
    prog2.addMovie(mov2);
    fest.addProgram(prog1);
    fest.addProgram(prog2);
    console.log(fest.getData());
    
})();