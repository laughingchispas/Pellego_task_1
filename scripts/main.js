
var app= angular.module('app', []);

app.controller('TestController', function($scope) {
        this.arrayText = [{
          text1: 'Hello',
          text2: 'world',
        }];

        this.addText = function(text) {
          this.arrayText.push(text);
        }
        this.form = {
          text1: '',
          text2: ''
        }
});

