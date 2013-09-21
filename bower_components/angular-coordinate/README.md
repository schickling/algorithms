angular-coordinate
==================

Coordiante system for AngularJS

## [Demo](http://schickling.github.io/angular-coordinate/)

## Features
*TODO*

## Installation
```sh
$ bower install angular-coordinate
```

## Usage

#### View
```html
<coordinate api="coordinate" width="100%" height="100%"></coordinate>
```

##### Available attributes
* width
* height
* scaleX
* scaleY
* fullscreen
* show-input
* api

#### Controller
You need to provide a function called `coordinate` in your scope to access the API
```js
$scope.coordinate = function (coordinate) {
    coordinate.addPoint(1, 1);
    coordinate.addFunction('x^3');
};
```

##### API
*TODO*

## Coming soon...
* Smarter scaling on zoom
* Tests
* current x value on graph
* scroll/zoom
* axis labels ('intelligent')
* display area current point x/y
* drag drop
* fullscreen