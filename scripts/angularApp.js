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
            {title: 'Casablanca', director: 'Curtiz', genre: ['drama', 'adventure']},
            {title: 'Citizen Kane', director: 'Welles', genre: ['adventure']},
            {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
            {title: 'Godfather', director: 'Coppola', genre: ['comedy']},
            {title: 'Back to the Future', director: 'Zemeckis', genre: ['science fiction']},
            {title: 'Casablanca', director: 'Curtiz', genre: ['drama']},
            {title: 'Citizen Kane', director: 'Welles', genre: ['drama']},
            {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
            {title: 'Godfather', director: 'Coppola', genre: ['drama']},
            {title: 'Back to the Future', director: 'Zemeckis', genre: ['drama']}
    ];




// show all movie cards
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
                    if (movie.genre.name === genre_name){    //checking if the the string is the same as the genre name
                       movie.hidden = false;   //hide becomes false if they are the same
                    }
                    else {
                        movie.hidden = true;  //hide is true if they are different
                    }
                })
    };


        var list = ['a','b','c'];
        var apple = list.indexOf('a'); // 0
        list.indexOf('c'); // 2
        list.indexOf('d'); // -1

        console.log(apple + 1);


        $scope.movieTrialCards = movie

        var movie =     [
                    {title: 'Casablanca', director: 'Curtiz', genre: ['drama', 'adventure']},
                    {title: 'Citizen Kane', director: 'Welles', genre: ['adventure']},
                    {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
                    {title: 'Godfather', director: 'Coppola', genre: ['comedy']},
                    {title: 'Back to the Future', director: 'Zemeckis', genre: ['science fiction']},
                    {title: 'Casablanca', director: 'Curtiz', genre: ['drama']},
                    {title: 'Citizen Kane', director: 'Welles', genre: ['drama']},
                    {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
                    {title: 'Godfather', director: 'Coppola', genre: ['drama']},
                    {title: 'Back to the Future', director: 'Zemeckis', genre: ['drama']}
            ];


        var genreVar = ['drama','adventure', 'horror','comedy','science fiction'];

        function sortGenre() {

                console.log("we're inside the function"); //check spot


                for (var i = 0; i < genreVar.length; i++) {
                    if (genreVar[i] === 'drama') {
                        console.log('drama');
                    }
                    else if (genreVar[i] === 'adventure') {
                        console.log('adventure');
                    }
                    else if (genreVar[i] === 'horror') {
                        console.log('horror');
                                        }
                    else if (genreVar[i] === 'comedy') {
                        console.log('comedy');
                                        }
                   else if (genreVar[i] === 'adventure') {
                       console.log('adventure');
                                       }
                     else {
                        console.log('nope');
                                }
                }

                console.log (genreVar);

                console.log('in between')

            $scopeTrial =   [
                              {title: 'Casablanca', director: 'Curtiz', genre: ['drama', 'adventure']},
                              {title: 'Citizen Kane', director: 'Welles', genre: ['adventure']},
                              {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
                              {title: 'Godfather', director: 'Coppola', genre: ['comedy']},
                              {title: 'Back to the Future', director: 'Zemeckis', genre: ['science fiction']},
                              {title: 'Casablanca', director: 'Curtiz', genre: ['drama']},
                              {title: 'Citizen Kane', director: 'Welles', genre: ['drama']},
                              {title: 'Psycho', director: 'Hitchcock', genre: ['horror']},
                              {title: 'Godfather', director: 'Coppola', genre: ['drama']},
                              {title: 'Back to the Future', director: 'Zemeckis', genre: ['drama']}
                      ];



                console.log("before angular");
                angular.forEach($scopeTrial, function() {
                console.log($scopeTrial[0]);
                console.log($scopeTrial.genre[1]);  //why wont this work???
                for (var i = 0; i < $scopeTrial.genre.length; i++) {
                                    console.log($scopeTrial.genre[i]);
                                    }
            });

        };

        console.log("end test");  // check spot
        sortGenre();


    });