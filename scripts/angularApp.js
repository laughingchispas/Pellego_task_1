angular.module('angularApp', [])
    .controller('CardController', function($scope) {
    $scope.movieCards = [
        {movieTitle: 'Casablanca', movieDirector: 'Curtiz'},
        {movieTitle: 'Citizen Kane', movieDirector: 'Welles'},
        {movieTitle: 'Psycho', movieDirector: 'Hitchcock'},
        {movieTitle: 'Godfather', movieDirector: 'Coppola'},
        {movieTitle: 'Back to the Future', movieDirector: 'Zemeckis'},
        {movieTitle: 'Casablanca', movieDirector: 'Curtiz'},
                {movieTitle: 'Citizen Kane', movieDirector: 'Welles'},
                {movieTitle: 'Psycho', movieDirector: 'Hitchcock'},
                {movieTitle: 'Godfather', movieDirector: 'Coppola'},
                {movieTitle: 'Back to the Future', movieDirector: 'Zemeckis'}
    ];
});