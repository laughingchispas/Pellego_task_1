var myApp = angular.module('angularApp', []);


myApp.controller('navController', function($scope) {
    $scope.navCards = [
            {page: "home"},
            {page: "movies"},
            {page: "about us"},
            {page: "links"},
            {page: "contacts"}
        ]
    });

myApp.controller('CardController', function($scope) {
    $scope.movieCards = [
        {title: 'Casablanca', director: 'Curtiz', genre: "drama"},
        {title: 'Citizen Kane', director: 'Welles', genre: "adventure"},
        {title: 'Psycho', director: 'Hitchcock', genre: "horror"},
        {title: 'Godfather', director: 'Coppola', genre: "comedy"},
        {title: 'Back to the Future', director: 'Zemeckis', genre: "science fiction"},
        {title: 'Casablanca', director: 'Curtiz', genre: "drama"},
        {title: 'Citizen Kane', director: 'Welles', genre: "drama"},
        {title: 'Psycho', director: 'Hitchcock', genre: "drama"},
        {title: 'Godfather', director: 'Coppola', genre: "drama"},
        {title: 'Back to the Future', director: 'Zemeckis', genre: "drama"}
    ]
    });


myApp.controller('GenreController', function($scope) {
    $scope.genreCards = [
            {genre: "drama"},
            {genre: "adventure"},
            {genre: "horror"},
            {genre: "comedy"},
            {genre: "science fiction"}
        ]
    });




