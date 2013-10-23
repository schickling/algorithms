'use strict';

angular.module('algorithmsApp')
  .factory('Coordinate',
    function () {

      function Coordinate(x, y) {
        this.x = x;
        this.y = y;

        this.toRelative = function () {
          this.x = this.x - (this.width / 2);
          this.y = (this.height / 2) - this.y;

          return this;
        };

        this.toAbsolute = function () {
          this.x = this.x + (this.width / 2);
          this.y = (this.height / 2) - this.y;

          return this;
        };

        this.clone = function () {
          return new Coordinate(this.x, this.y, this.width, this.height);
        };
      }

      return Coordinate;
    });