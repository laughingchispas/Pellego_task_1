var myApp = angular.module('angularApp', []);


myApp.controller('CardController', function($scope) {

//sorting function
    $scope.sortBy = function(anyName) {
        $scope.sorting = anyName
        };


//what is this????????????
     $scope.addForm = function(otherName) {
                $scope.sorting = otherName
                };

//remove card 'permanently' until reload
    $scope.removeCard = function(idX) {
        $scope.movieCards.splice(idX,1)  //splice (or remove) at the the card's posiiton for ONE care (idX, 1 = 1card)
        };



//navigation link content
    $scope.navCards = [
                {page: 'home'},
                {page: 'movies'},
                {page: 'about us'},
                {page: 'links'},
                {page: 'contact'}
    ];

//movie card content
    $scope.movieCards = [
            {title: 'Casablanca', director: 'Curtiz', genre: [name: 'drama', name: 'adventure']},
            {title: 'Citizen Kane', director: 'Welles', genre: [name: 'adventure']},
            {title: 'Psycho', director: 'Hitchcock', genre: [name: 'horror']},
            {title: 'Godfather', director: 'Coppola', genre: [name: 'comedy']},
            {title: 'Back to the Future', director: 'Zemeckis', genre: [name: 'science fiction']},
            {title: 'Casablanca', director: 'Curtiz', genre: [name: 'drama']},
            {title: 'Citizen Kane', director: 'Welles', genre: [name: 'drama']},
            {title: 'Psycho', director: 'Hitchcock', genre: [name: 'horror']},
            {title: 'Godfather', director: 'Coppola', genre: [name: 'drama']},
            {title: 'Back to the Future', director: 'Zemeckis', genre: [name: 'drama']}
    ];


// hide all movie cards
    $scope.showAllMovies = function() {
        angular.forEach($scope.movieCards, function(movie) {  //shuffle through all the .movieCards
        movie.hidden = false;  //**movie variable just for inside this function
        })
    };


    $scope.newMovie = {    //empty movie object
    };

    $scope.addNewMovie = function() {
                     $scope.movieCards.push($scope.newMovie);   //pushing the empty movie object onto movieCards
                     $scope.newMovie = {};     //leaving the form empty by emptying the newMovie object on the view
                };


//genre names for later sorting
    $scope.genreCards =[
                   {name: 'drama'},
                   {name: 'adventure'},
                   {name: 'horror'},
                   {name: 'comedy'},
                   {name: 'science fiction'}
    ];


//sorting for strings - only showing genres determined by the button
//!!! now that strings have been turned into arrays - this function no longer works!
    $scope.showGenreMovies = function(genre_name) {      //genre_name is a variable within this function
        angular.forEach($scope.movieCards, function(movie) {   //loops through movieCards, movie is also a var. in this function
                    if (movie.genre === genre_name){    //checking if the the string is the same as the genre name
                       movie.hidden = false;   //hide becomes false if they are the same
                    }
                    else {
                        movie.hidden = true;  //hide is true if they are different
                    }
                })
    };


    });