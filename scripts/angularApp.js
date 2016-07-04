var myApp = angular.module('angularApp', []);


myApp.controller('CardController', function($scope) {


    $scope.sortBy = function(anyName) {
        $scope.sorting = anyName
        }


     $scope.addForm = function(otherName) {
                $scope.sorting = otherName
                }

    $scope.removeCard = function(idX) {
        $scope.movieCards.splice(idX,1)
        }








    $scope.navCards = [
                {page: "home"},
                {page: "movies"},
                {page: "about us"},
                {page: "links"},
                {page: "contacts"}
            ]




    var movies = [
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

    $scope.movieCards = movies








    var genres = [
                {genre: "drama"},
                {genre: "adventure"},
                {genre: "horror"},
                {genre: "comedy"},
                {genre: "science fiction"}
            ]

    $scope.genreCards = genres

    $scope.edit = function(genre){
        if(genres.genre==="drama"){
            return true
        }
    }


    $scope.names = ["Ben", "Nate", "Austin", "Yiannis", "Matt M", "Matt B"]



    $scope.fruitCards = fruits

    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    function pushFunction() {
        fruits.push("star fruit");
        }

    });


