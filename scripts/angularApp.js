var myApp = angular.module('angularApp', []);


myApp.controller('CardController', function($scope) {

//sorting function
    $scope.sortBy = function(anyName) {
        $scope.sorting = anyName
        };

                //what is this????????????
                //IS THIS EVEN NECESSARY? I don't see how it links
                //into the previous function...so it makes no sense to me.

    // $scope.addForm = function(otherName) {
              //  $scope.sorting = otherName
                //};


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
            {title: 'Casablanca', director: 'Curtiz', genre: ['drama', 'adventure']},
            {title: 'Citizen Kane', director: 'Welles', genre: ['adventure', 'science fiction']},
            {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
            {title: 'Godfather', director: 'Coppola', genre: ['comedy']},
            {title: 'Back to the Future', director: 'Zemeckis', genre: ['science fiction']},
            {title: 'Casablanca', director: 'Curtiz', genre: ['drama']},
            {title: 'Citizen Kane', director: 'Welles', genre: ['drama']},
            {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
            {title: 'Godfather', director: 'Coppola', genre: ['drama']},
            {title: 'Back to the Future', director: 'Zemeckis', genre: ['drama']}
    ];

//creating a new movie card
    $scope.newMovie = {};    //empty movie object


    $scope.addNewMovie = function() {
         $scope.movieCards.push($scope.newMovie);   //pushing the empty movie object onto movieCards
         $scope.newMovie = {};     //leaving the form empty by emptying the newMovie object on the view
    };

                $scope.newGenre = {};

                $scope.addGenre = function() {
                    console.log('trial');
                    $scope.movieCards.genre.push($scope.newGenre);
                    console.log ('secondstep');
                    $scope.newGenre = {};
                }


//genre names for sorting buttons
    $scope.genreCards =[
                   {name: 'drama'},
                   {name: 'adventure'},
                   {name: 'horror'},
                   {name: 'comedy'},
                   {name: 'science fiction'}
    ];


// show all movie cards
    $scope.showAllMovies = function() {
        angular.forEach($scope.movieCards, function(movie) {  //shuffle through all the .movieCards
        movie.hidden = false;  //**movie variable just for inside this function
        })
    };


//show only certain genres
    $scope.showGenreMovies = function(genre_name) {      //genre_name is a variable within this function
        angular.forEach($scope.movieCards, function(movie) {   //loops through movieCards, movie is also a var. in this function
            for(var i=0; i < movie.genre.length; i++) {
                if (movie.genre[i] === genre_name){    //checking if the the string is the same as the genre name
                       movie.hidden = false;   //hide becomes false if they are the same
                       break;
                }
                if (i === movie.genre.length - 1){    //checking if the the string is the same as the genre name
                       movie.hidden = true;   //hide becomes false
                }
            }

        }
    )};



//remove card 'permanently' until reload
    $scope.removeCard = function(idX) {
        $scope.movieCards.splice(idX,1)  //splice (or remove) at the the card's posiiton for ONE care (idX, 1 = 1card)
    };

    });