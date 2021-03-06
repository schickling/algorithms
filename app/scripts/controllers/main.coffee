angular.module("algorithmsApp").controller "main", ($scope) ->
  $scope.algorithmCategories =
    math:
      name: "Math"
      algorithms: [
        name: "Bin packing"
        description: "Approximative bin packing algorithm"
        url: "binpacking"
        label: ""
      ,
        name: "Chinese remainder theorem"
        description: "Solves a system of congruence equations"
        url: "chinese-remainder-theorem"
        label: ""
      ,
        name: "Prime number test"
        description: "Test a number if it's prime with the sieve of Eratosthenes"
        url: "prime-number-test"
        label: ""
      ,
        name: "Prime number generators"
        description: "Generate prime numbers with different algorithms"
        url: "prime-number-generators"
        label: "Under construction"
      ,
        name: "Extended euclidean algorithm"
        description: "Calculates the greatest common divisor"
        url: "extended-euclidean-algorithm"
        label: ""
      ,
        name: "Gaussian elimination"
        description: "Row reduces a matrix"
        url: "gaussian-elimination"
        label: ""
      ,
        name: "Invert matrix"
        description: "Inverts a matrix with the gaussian elimination"
        url: "invert-matrix"
        label: ""
      ,
        name: "Smith normal form"
        description: "Translate a matrix smith normal form"
        url: "smith-normal-form"
        label: "Under construction"
      ,
        name: "Matrix multiplication"
        description: "Multiplicates three matrices"
        url: "matrix-multiplication"
        label: ""
      ,
        name: "Legendre symbol"
        description: "Legendre symbol calulation"
        url: "legendre"
        label: ""
      ,
        name: "Determinant"
        description: "Determinant calulation with Leibniz algorithm"
        url: "determinant"
        label: ""
      ,
        name: "LU Decomposition"
        description: "Factorizes a matrix into an upper and a lower diagonal matrix and solves the given equation system"
        url: "lu-decomposition"
        label: ""
      ,
        name: "Cholesky Decomposition"
        description: "Factorizes a symetric, positive definite matrix"
        url: "cholesky-decomposition"
        label: ""
      ,
        name: "Interpolation"
        description: "Interpolates points into a polynomial or a spline"
        url: "interpolation"
        label: ""
      ,
        name: "Fixed point iteration"
        description: "Evaluates a function with n iteration steps"
        url: "fixed-point-iteration"
        label: ""
      ,
        name: "Newton method"
        description: "Approximates roots via iteration steps"
        url: "newton-method"
        label: ""
      ,
        name: "Linear regression"
        description: "Finds a straight line approximating a set of given points"
        url: "linear-regression"
        label: ""
      ]

    graphics:
      name: "Graphics"
      algorithms: [
        name: "Bezier"
        description: "Draw bezier curves"
        url: "bezier"
        label: ""
      ,
        name: "Perlin texture generator"
        description: "Generates procedual textures"
        url: "perlin"
        label: ""
      ]
