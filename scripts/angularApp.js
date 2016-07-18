var myApp = angular.module('angularApp', []);


myApp.controller('CardController', function($scope) {

//sorting function
    /**
     * Honk honk! The electric castle boat is on the move!
     * This comment is a continuation of my response on line 108 in index.html. Start there before reading!
     *
     * $scope.sortBy is a function that does one single thing: changes your current sort parameter. It's an event handler
     * function, because it is called by ng-click listeners that are attached to buttons in the DOM. It could also be used
     * (as you know) by calling it from other functions in the controller (in that context, it wouldn't be considered an
     * event handler).
     *
     * All that happens is it changes your $scope.sorting to the new value that is passed in by the caller. Angular does
     * its fancy magic when scope properties change, and performs 'change detection'. If $scope.sorting has changed, after
     * re-sorting your data model, it updates your view accordingly.
     *
     * Basically, in response to the question:
     * "how it connects to the form function and then how it connects in the correct scope to the movieCards"
     *
     * Your buttons are *not* connected in any way to your data model. All they do is tell your controller something.
     * They simply call a function and tell it to change the sort paramater. The rest of your controller logic updates
     * the sort on the model because of that change (thanks to angular's change detection), and because of your new model
     * changes, angular detects those and updates your view (view === HTML) accordingly.
     *
     * How does it know to update your view accordingly, you ask? Where the *hell* is the code that's magically sorting
     * my view, you say, in bewilderment and frustration?
     *
     * Quick, go to line 35 in index.html for more!
     *
     * :o)
     */
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