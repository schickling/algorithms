"use strict";angular.module("algorithmsApp",["ngRoute","angulartics","angulartics.google.analytics"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"main"}).when("/extended-euclidean-algorithm",{templateUrl:"views/extendedEuclideanAlgorithm.html",controller:"extendedEuclideanAlgorithm"}).when("/chinese-remainder-theorem",{templateUrl:"views/chineseRemainderTheorem.html",controller:"chineseRemainderTheorem"}).when("/gaussian-elimination",{templateUrl:"views/gaussianElimination.html",controller:"gaussianElimination"}).when("/invert-matrix",{templateUrl:"views/invertMatrix.html",controller:"invertMatrix"}).when("/smith-normal-form",{templateUrl:"views/smithNormalForm.html",controller:"smithNormalForm"}).when("/prime-number-test",{templateUrl:"views/primeNumberTest.html",controller:"primeNumberTest"}).when("/matrix-multiplication",{templateUrl:"views/matrixMultiplication.html",controller:"matrixMultiplication"}).when("/prime-number-generators",{templateUrl:"views/primeNumberGenerators.html",controller:"primeNumberGenerators"}).when("/legendre",{templateUrl:"views/legendre.html",controller:"legendre"}).when("/determinant",{templateUrl:"views/determinant.html",controller:"DeterminantCtrl"}).when("/lu-decomposition",{templateUrl:"views/lUDecomposition.html",controller:"lUDecomposition"}).when("/cholesky-decomposition",{templateUrl:"views/cholesky-decomposition.html",controller:"CholeskyDecompositionCtrl"}).when("/interpolation",{templateUrl:"views/interpolation.html",controller:"InterpolationCtrl"}).otherwise({redirectTo:"/"})}]).run(["Helpers",function(a){a.load()}]),angular.module("algorithmsApp").controller("main",["$scope",function(a){a.algorithms=[{name:"Chinese remainder theorem",description:"Solves a system of congruence equations",url:"chinese-remainder-theorem",label:""},{name:"Prime number test",description:"Test a number if it's prime with the sieve of Eratosthenes",url:"prime-number-test",label:""},{name:"Prime number generators",description:"Generate prime numbers with different algorithms",url:"prime-number-generators",label:"Under construction"},{name:"Extended euclidean algorithm",description:"Calculates the greates common divisor",url:"extended-euclidean-algorithm",label:""},{name:"Gaussian elimination",description:"Row reduces a matrix",url:"gaussian-elimination",label:""},{name:"Invert matrix",description:"Inverts a matrix with the gaussian elimination",url:"invert-matrix",label:""},{name:"Smith normal form",description:"Translate a matrix smith normal form",url:"smith-normal-form",label:"Under construction"},{name:"Matrix multiplication",description:"Multiplicates three matrices",url:"matrix-multiplication",label:""},{name:"Legendre symbol",description:"Legendre symbol calulation",url:"legendre",label:""},{name:"Determinant",description:"Determinant calulation with Leibniz algorithm",url:"determinant",label:""},{name:"LU Decomposition",description:"Factorizes a matrix into an upper and a lower diagonal matrix and solves the given equation system",url:"lu-decomposition",label:""},{name:"Cholesky Decomposition",description:"Factorizes a symetric, positive definite matrix",url:"cholesky-decomposition",label:""},{name:"Interpolation",description:"Interpolates points into a polynomial or a spline",url:"interpolation",label:""}]}]),angular.module("algorithmsApp").controller("extendedEuclideanAlgorithm",["$scope","ExtendedEuclideanAlgorithm","Utils",function(a,b,c){a.a=120,a.b=23,a.gcd=void 0,a.lcm=void 0,a.x=void 0,a.y=void 0,a.steps=[],a.calc=function(){var c=b.calculate(a.a,a.b);a.x=c.x,a.y=c.y,a.gcd=c.gcd,a.lcm=c.lcm,a.steps=c.steps},a.random=function(){a.a=c.randomNumber(2,1e4),a.b=c.randomNumber(2,1e4),a.calc()},a.cyclicColor=function(a){var b=["#990000","#006600","#000099","#FF6600","#000000"];return b[a%b.length]},a.calc()}]),angular.module("algorithmsApp").controller("chineseRemainderTheorem",["$scope","ChineseRemainderTheorem","Utils",function(a,b,c){a.x="x",a.rows=[{m:3,a:2},{m:4,a:3},{m:5,a:2}],a.addRow=function(){a.rows.push({m:c.randomNumber(2,100),a:c.randomNumber(2,100)}),a.calculate()},a.dropRow=function(b){a.rows.splice(b,1),a.calculate()},a.calculate=function(){var c=[],d=[];a.rows.forEach(function(a){c.push(parseInt(a.a,10)),d.push(parseInt(a.m,10))}),a.x=b.calculate(c,d)},a.calculate()}]),angular.module("algorithmsApp").controller("gaussianElimination",["$scope","GaussianElimination","Utils",function(a,b,c){a.inputMatrix=[[1,2,3],[4,5,6],[7,8,9]],a.resultMatrix=[[0,0,0],[0,0,0],[0,0,0]],a.eliminate=function(){a.resultMatrix=b.eliminate(a.inputMatrix)},a.addRow=function(){for(var b=[],d=0;d<a.inputMatrix[0].length;d++)b.push(c.randomNumber(-10,20));a.inputMatrix.push(b),a.eliminate()},a.addColumn=function(){a.inputMatrix.forEach(function(a){a.push(c.randomNumber(-10,20))}),a.eliminate()},a.deleteRow=function(b){1!==a.inputMatrix.length&&(a.inputMatrix.splice(b,1),a.eliminate())},a.deleteColumn=function(b){1!==a.inputMatrix[0].length&&(a.inputMatrix.forEach(function(a){a.splice(b,1)}),a.eliminate())},a.eliminate()}]),angular.module("algorithmsApp").controller("invertMatrix",["$scope","GaussianElimination","Utils",function(a,b,c){a.inputMatrix=[[0,-1,0],[0,0,-1],[4,0,2]],a.invert=function(){a.outputMatrix=b.invert(a.inputMatrix)},a.makeBigger=function(){c.matrixExpand(a.inputMatrix),a.invert()},a.makeSmaller=function(){c.matrixShrink(a.inputMatrix),a.invert()},a.invert()}]),angular.module("algorithmsApp").controller("smithNormalForm",["$scope","SmithNormalForm","Utils",function(a,b,c){a.A=[[-5,5,-50],[-10,5,45],[10,-5,-30]],a.calculate=function(){var c=b.calculate(a.A);a.B=c.B,a.S=c.S,a.T=c.T,a.elementaryDivisors=c.elementaryDivisors},a.makeBigger=function(){c.matrixExpand(a.A),a.calculate()},a.makeSmaller=function(){c.matrixShrink(a.A),a.calculate()},a.calculate()}]),angular.module("algorithmsApp").controller("primeNumberTest",["$scope",function(a){a.number=23,a.calculate=function(){a.isPrime=a.number.isPrime()},a.calculate()}]),angular.module("algorithmsApp").controller("matrixMultiplication",["$scope","MatrixMultiplication","Utils",function(a,b,c){a.inputMatrices=[[[1,0,0],[0,1,0],[0,0,1]],[[2,4,4],[-6,6,12],[10,-4,-16]],[[1,0,0],[0,1,0],[0,0,1]]],a.calculate=function(){a.outputMatrix=b.calculate(a.inputMatrices)},a.addMatrix=function(){a.inputMatrices.push(c.identityMatrix(3)),a.calculate()},a.deleteMatrix=function(b){a.inputMatrices.splice(b,1),a.calculate()},a.calculate()}]),angular.module("algorithmsApp").service("ExtendedEuclideanAlgorithm",function(){return{calculate:function(a,b){var c,d,e,f,g,h,i,j,k=[],l=2;k.push({remainder:Math.abs(a),combinationA:a.sign(),combinationB:0}),k.push({remainder:Math.abs(b),combinationA:0,combinationB:b.sign()});do e=parseInt(k[l-2].remainder/k[l-1].remainder,10),f=k[l-2].remainder%k[l-1].remainder,g=k[l-2].combinationA-k[l-1].combinationA*e,h=k[l-2].combinationB-k[l-1].combinationB*e,k.push({quotient:e,remainder:f,combinationA:g,combinationB:h}),l++;while(f>0);return k.pop(),c=k[l-2].combinationA,d=k[l-2].combinationB,i=a*c+b*d,j=Math.abs(a*b/i),{x:c,y:d,gcd:i,lcm:j,steps:k}}}}),angular.module("algorithmsApp").service("ChineseRemainderTheorem",["ExtendedEuclideanAlgorithm",function(a){return{calculate:function(b,c){if(!(b instanceof Array&&c instanceof Array&&b.length===c.length))return!1;var d=1,e=0,f=b.length;c.forEach(function(a){d*=a});for(var g=0;f>g;g++){var h=c[g],i=d/h,j=a.calculate(i,h).x,k=j*i;e+=b[g]*k}return(e%d+d)%d}}}]),angular.module("algorithmsApp").service("Utils",function(){return{randomNumber:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},identityMatrix:function(a){for(var b=[],c=0;a>c;c++){b.push([]);for(var d=0;a>d;d++)b[c][d]=c===d?1:0}return b},emptyMatrix:function(a){for(var b=[],c=0;a>c;c++){b.push([]);for(var d=0;a>d;d++)b[c][d]=0}return b},matrixMultiply:function(a,b){var c,d,e,f,g=[];for(c=0;c<a.length;c++)for(g[c]=[],d=0;d<b[0].length;d++){for(e=0,f=0;f<b.length;f++)e+=b[f][d]*a[c][f];g[c].push(e)}return g},matrixTranspose:function(a){return Object.keys(a[0]).map(function(b){return a.map(function(a){return a[b]})})},matrixShrink:function(a){a.pop(),a.forEach(function(a){a.pop()})},matrixExpand:function(a){for(var b=[],c=this,d=0;d<a[0].length;d++)b.push(c.randomNumber(-10,20));a.push(b),a.forEach(function(a){a.push(c.randomNumber(-10,20))})}}}),angular.module("algorithmsApp").service("GaussianElimination",["Utils",function(a){return{eliminate:function(a){var b,c,d,e,f,g,h=a.clone(),i=h.length,j=i?h[0].length:0;for(b=0;i>b;b++){for(g=this._findPivotRowForColumn(h,b),this._swapRows(h,g,b),e=h[b][b],d=b;j>d&&e;d++)h[b][d]/=e,this._roundElement(h,b,d);for(c=0;i>c;c++)if(c!==b)for(f=h[c][b],d=b;j>d&&f;d++)h[c][d]-=f*h[b][d],this._roundElement(h,c,d)}return h},invert:function(b){var c,d,e,f,g,h,i=b.clone(),j=i.length,k=a.identityMatrix(j);if(i.length!==i[0].length)return!1;for(c=0;j>c;c++){for(h=this._findPivotRowForColumn(i,c),this._swapRows(i,h,c),this._swapRows(k,h,c),f=i[c][c],e=0;j>e&&f;e++)i[c][e]/=f,this._roundElement(i,c,e),k[c][e]/=f,this._roundElement(k,c,e);for(d=0;j>d;d++)if(d!==c)for(g=i[d][c],e=0;j>e&&g;e++)i[d][e]-=g*i[c][e],this._roundElement(i,d,e),k[d][e]-=g*k[c][e],this._roundElement(k,d,e)}return 1!==i[j-1][j-1]?!1:k},_swapRows:function(a,b,c){var d=a[c];a[c]=a[b],a[b]=d},_findPivotRowForColumn:function(a,b){for(var c=0,d=b,e=b;e<a.length;e++)c<Math.abs(a[e][b])&&(c=Math.abs(a[e][b]),d=e);return d},_roundElement:function(a,b,c){a[b][c]=+a[b][c].toPrecision(10)}}}]),angular.module("algorithmsApp").service("SmithNormalForm",["Utils","ExtendedEuclideanAlgorithm",function(a,b){return{m:null,B:null,S:null,T:null,calculate:function(b){return this.m=b.length,this.B=b.clone(),this.S=a.identityMatrix(this.m),this.T=a.identityMatrix(this.m),this._orderMatrix(),this._reduceMatrix(),this._orderMatrix(),this._makeDiagonalDivisible(),{B:this.B,S:this.S,T:this.T,elementaryDivisors:this._getElementaryDivisors()}},_orderMatrix:function(){var b,c,d,e,f,g,h,i;for(f=0;f<this.m;f++){for(b=Number.POSITIVE_INFINITY,g=f;g<this.m;g++)for(h=f;h<this.m;h++)e=Math.abs(this.B[g][h])||Number.POSITIVE_INFINITY,b>e&&(b=e,c=g,d=h);f===c&&f===d||!isFinite(b)||(i=this._getIdentityMatrix(),i[c][c]=0,i[f][f]=0,i[c][f]=1,i[f][c]=1,this.S=a.matrixMultiply(i,this.S),this.B=a.matrixMultiply(i,this.B),i=this._getIdentityMatrix(),i[d][d]=0,i[f][f]=0,i[d][f]=1,i[f][d]=1,this.T=a.matrixMultiply(this.S,i),this.B=a.matrixMultiply(this.B,i))}},_reduceMatrix:function(){var a,b,c;for(a=0;a<this.m-1;a++){for(b=a+1;b<this.m;b++)this._reduceElement(a,b,!0);for(c=a+1;c<this.m;c++)this._reduceElement(a,c,!1);for(b=a+1;b<this.m;b++)this._reduceElement(a,b,!0)}},_reduceElement:function(c,d,e){var f=this.B[c][c],g=e?this.B[d][c]:this.B[c][d];if(0!==f*g){var h=b.calculate(f,g),i=h.x,j=h.y,k=-(g/h.gcd),l=f/h.gcd,m=this._getIdentityMatrix();e?(m[c][c]=i,m[c][d]=j,m[d][c]=k,m[d][d]=l,this.S=a.matrixMultiply(m,this.S),this.B=a.matrixMultiply(m,this.B)):(m[c][c]=i,m[c][d]=k,m[d][c]=j,m[d][d]=l,this.T=a.matrixMultiply(this.T,m),this.B=a.matrixMultiply(this.B,m))}},_makeDiagonalDivisible:function(){var b,c,d,e;for(d=0;d<this.m-1;d++)b=this.B[d][d],c=this.B[d+1][d+1],0!==c%b&&0!==c&&(e=this._getIdentityMatrix(),e[d+1][d]=1,this.T=a.matrixMultiply(this.T,e),this.B=a.matrixMultiply(this.B,e),this._reduceElement(d,d+1,!0),this._reduceElement(d,d+1,!1),d>0&&(d-=2))},_getElementaryDivisors:function(){for(var a,b=[],c=0;c<this.B.length;c++)a=Math.abs(this.B[c][c]),a&&b.push(a);return b},_getIdentityMatrix:function(){return a.identityMatrix(this.m)}}}]),angular.module("algorithmsApp").service("MatrixMultiplication",["Utils",function(a){return{calculate:function(b){for(var c=b[0],d=1;d<b.length;d++)c=a.matrixMultiply(c,b[d]);return c}}}]),angular.module("algorithmsApp").service("Helpers",function(){return{load:function(){Array.prototype.clone=function(){for(var a=this.slice(0),b=0;b<this.length;b++)this[b].clone&&(a[b]=this[b].clone());return a},Number.prototype.sign=function(){var a=this.valueOf();return a?0>a?-1:1:0},Number.prototype.isPrime=function(){var a=this.valueOf();if(3>a||0===a%2)return 2===a;for(var b=3;a>b*b;b+=2)if(0===a%b)return!1;return!0},Number.prototype.primeFactors=function(){for(var a=Math.abs(this.valueOf()),b=2,c=[];1!==a;)0===a%b?(c.push(b),a/=b):b++;return c},Number.prototype.isSquare=function(){return 0===Math.sqrt(this.valueOf())%1}}}}),angular.module("algorithmsApp").service("LegendreSymbol",function(){return{calculate:function(a,b){if(a>=b||0>a)return this.calculate((a%b+b)%b,b);if(0===a||1===a)return a;if(2===a)return 1===b%8||7===b%8?1:-1;if(a===b-1)return 1===b%4?1:-1;if(a.isPrime())return 0===(b-1)/2%2||0===(a-1)/2%2?this.calculate(b,a):-1*this.calculate(b,a);var c=a.primeFactors(),d=this,e=1;return c.forEach(function(a){e*=d.calculate(a,b)}),e}}}),angular.module("algorithmsApp").service("PrimeNumberGenerator",function(){return{primorial:function(a){if(1>a)return!1;for(var b,c,d=[],e=0;a>e;e++)0===e?d.push(2):1===e?d.push(3):(b=1,c=this.sieveOfEratosthenes(e+1),c.forEach(function(a){b*=a}),d.push(b-1));return d},sieveOfEratosthenes:function(a){var b,c,d=[],e=[];for(b=1;a>=b;b++)d[b]=!0;for(d[0]=!1,d[1]=!1,b=2;a>b*b;b++)for(c=2*b;a>=c;c+=b)d[c]=!1;return d.forEach(function(a,b){a&&e.push(b)}),e}}}),angular.module("algorithmsApp").controller("primeNumberGenerator",["$scope","PrimeNumberGenerator",function(a,b){a.algorithms=[{name:"Primorial calculation",method:b.primorial}],a.selectedAlgorithm=a.algorithms[0],a.amount=10,a.calculate=function(){a.primeNumbers=a.selectedAlgorithm.method(a.amount)},a.calculate()}]),angular.module("algorithmsApp").controller("legendre",["$scope","LegendreSymbol",function(a,b){a.a=150,a.p=1009,a.calculate=function(){a.result=b.calculate(a.a,a.p)},a.calculate()}]),angular.module("algorithmsApp").service("LeibnizDeterminant",function(){return{calculate:function(a){var b=a.length;if(1===b)return a[0][0];for(var c=0,d=0;b>d;d++)c+=Math.pow(-1,d)*a[d][0]*this.calculate(this._getSubMatrix(a,d));return c},_getSubMatrix:function(a,b){var c=a.clone();c.splice(b,1);for(var d=0;d<c.length;d++)c[d].splice(0,1);return c}}}),angular.module("algorithmsApp").controller("DeterminantCtrl",["$scope","LeibnizDeterminant","Utils",function(a,b,c){a.algorithms=[{name:"Leibniz",service:b}],a.selectedAlgorithm=a.algorithms[0],a.matrix=[[1,3,-9],[11,-3,-5],[2,8,-1]],a.calculate=function(){a.determinant=a.selectedAlgorithm.service.calculate(a.matrix)},a.makeBigger=function(){c.matrixExpand(a.matrix),a.calculate()},a.makeSmaller=function(){c.matrixShrink(a.matrix),a.calculate()},a.calculate()}]),angular.module("algorithmsApp").directive("matrix",function(){return{templateUrl:"views/directives/matrix.html",restrict:"E",scope:!0,link:function(a,b,c){a.matrix=a.$parent[c.ngModel],a.showDelete=c.ngShowDelete||!1,a.changeCallback=c.ngChangeCallback}}}),angular.module("algorithmsApp").service("LUDecomposition",["Utils",function(a){return{calculate:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=b.length,p=a.emptyMatrix(o),q=b.clone(),r=a.identityMatrix(o),s=[],t=[];for(e=0;o>e;e++){if(d){for(j=0,k=e,f=e;o>f;f++)l=Math.abs(q[f][e]),l>j&&(j=l,k=f);m=a.identityMatrix(o),m[e][e]=0,m[k][k]=0,m[k][e]=1,m[e][k]=1,r=a.matrixMultiply(m,r),q=a.matrixMultiply(m,q),p=a.matrixMultiply(m,p)}for(p[e][e]=1,g=e+1;o>g;g++)for(i=q[g][e]/q[e][e],p[g][e]=i,h=e;o>h;h++)q[g][h]-=q[e][h]*i}for(d&&(c=c.map(function(a){return[a]}),c=a.matrixMultiply(r,c),c=c.map(function(a){return a[0]})),e=0;o>e;e++){for(n=0,h=0;e>h;h++)n+=p[e][h]*t[h];t[e]=c[e]-n}for(e=o-1;e>=0;e--){for(n=0,h=e+1;o>h;h++)n+=q[e][h]*s[h];s[e]=(t[e]-n)/q[e][e]}return{L:p,U:q,P:r,x:s,y:t}}}}]),angular.module("algorithmsApp").controller("lUDecomposition",["$scope","LUDecomposition","Utils",function(a,b,c){a.usePivoting=!1,a.A=[[1,2,1],[2,2,3],[3,5,4]],a.b=[[4],[2],[5]],a.calculate=function(){var c=a.b.map(function(a){return a[0]}),d=b.calculate(a.A,c,a.usePivoting);a.L=d.L,a.U=d.U,a.P=d.P,a.x=d.x,a.y=d.y},a.makeBigger=function(){c.matrixExpand(a.A),a.b.push([c.randomNumber(-5,10)]),a.calculate()},a.makeSmaller=function(){c.matrixShrink(a.A),a.b.pop(),a.calculate()},a.calculate()}]),angular.module("algorithmsApp").service("CholeskyDecomposition",["LeibnizDeterminant","Utils",function(a,b){return{calculate:function(a){if(!this._isSymetric(a)||!this._isPositiveDefinite(a))return!1;var c,d,e,f,g=a.length,h=b.emptyMatrix(g),i=b.emptyMatrix(g);for(d=0;g>d;d++){for(f=0;d>f;f++){for(c=a[d][f],e=0;d>e;e++)c-=h[d][e]*h[f][e];h[d][f]=c/h[f][f],i[f][d]=h[d][f]}for(c=a[d][d],e=0;d>e;e++)c-=h[d][e]*h[d][e];h[d][d]=Math.sqrt(c),i[f][d]=h[d][d]}return{L:h,LT:i}},_isSymetric:function(a){for(var b=0;b<a.length;b++)for(var c=b;c<a.length;c++)if(a[b][c]!==a[c][b])return!1;return!0},_isPositiveDefinite:function(b){for(var c=0;c<b.length;c++)if(a.calculate(this._getMinorMatrix(b,c))<=0)return!1;return!0},_getMinorMatrix:function(a,b){for(var c=a.clone(),d=a.length-b-1,e=0;d>e;e++){for(var f=0;d>f;f++)c[f].pop();c.pop()}return c}}}]),angular.module("algorithmsApp").controller("CholeskyDecompositionCtrl",["$scope","CholeskyDecomposition","Utils",function(a,b,c){a.A=[[4,2,2],[2,17,5],[2,5,11]],a.calculate=function(){var c=b.calculate(a.A);a.L=c.L||!1,a.LT=c.LT||!1},a.makeBigger=function(){c.matrixExpand(a.A),a.calculate()},a.makeSmaller=function(){c.matrixShrink(a.A),a.calculate()},a.calculate()}]),angular.module("algorithmsApp").service("VandermondeInterpolation",["GaussianElimination",function(a){return{coordinates:null,matrix:null,coefficients:null,calculate:function(a){return this.coordinates=a,this.matrix=[],this.coefficients=[],this._sortCoordinatesByXValues(),this._prepareMatrix(),this._solveEquationSystem(),this.coefficients},_sortCoordinatesByXValues:function(){this.coordinates=_.sortBy(this.coordinates,function(a){return a.x})},_prepareMatrix:function(){var a,b,c,d=this.coordinates.length;for(b=0;d>b;b++){for(a=[],c=0;d>c;c++)a.push(Math.pow(this.coordinates[b].x,c));a.push(this.coordinates[b].y),this.matrix.push(a)}},_solveEquationSystem:function(){this.matrix=a.eliminate(this.matrix);for(var b=0;b<this.matrix.length;b++)this.coefficients[b]=this.matrix[b][this.matrix[b].length-1]/this.matrix[b][b]}}}]),angular.module("algorithmsApp").controller("InterpolationCtrl",["$scope","VandermondeInterpolation",function(a,b){a.coordinates=[],a.addCoordinate=function(b){for(var c=0;c<a.coordinates.length;c++)if(a.coordinates[c].x===b.x)return;a.coordinates.push(b),a.calculate(),a.$digest()},a.calculate=function(){a.polynomial={color:"#FF0000",coefficients:b.calculate(a.coordinates)},a.splines={color:"#428bca",splines:[]}},a.calculate()}]),angular.module("algorithmsApp").directive("interpolation",function(){return{template:"<canvas></canvas>",restrict:"E",link:function(a,b){function c(){o=b.width(),p=b.height(),m=b.children("canvas").first(),m.attr({width:o,height:p}),n=m.get(0).getContext("2d")}function d(){m.on("click",function(c){var d=b.offset(),e=new l(c.clientX-d.left,c.clientY-d.top).toRelative();a.addCoordinate(e)})}function e(){a.$watch("polynomial",function(){f()})}function f(){g(),h(),j(),k(),a.coordinates.forEach(function(a){i(a)})}function g(){n.clearRect(0,0,o,p)}function h(){}function i(a){a=new l(a.x,a.y).toAbsolute(),n.beginPath(),n.arc(a.x,a.y,12,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(0, 0, 0, 0.1)",n.fill(),n.beginPath(),n.arc(a.x,a.y,3,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(0, 0, 0, 0.7)",n.fill()}function j(){var b,c,d,e,f=a.polynomial.coefficients,g=a.polynomial.color;if(f.length>0){for(n.beginPath(),c=-(o/2);o/2>=c;c++){for(b=0,d=0;d<f.length;d++)b+=Math.pow(c,d)*f[d];e=new l(c,b).toAbsolute(),n.lineTo(e.x,e.y)}n.strokeStyle=g,n.stroke()}}function k(){}function l(a,b){this.x=a,this.y=b,this.toRelative=function(){return this.x=this.x-o/2,this.y=p/2-this.y,this},this.toAbsolute=function(){return this.x=this.x+o/2,this.y=p/2-this.y,this}}var m,n,o,p;c(),d(),e()}}}),angular.module("algorithmsApp").service("CubicSplineInterpolation",["Utils",function(a){return{coordinates:null,splines:null,pascalMatrix:[[1,0,0,0],[1,1,0,0],[1,2,1,0],[1,3,3,1]],calculate:function(a){return this.coordinates=a,this.splines=[],this.coordinates.length<2?!1:(this._sortCoordinatesByXValues(),this._createFirstSpline(),this._createRemainingSplines(),this.splines)},_sortCoordinatesByXValues:function(){this.coordinates=_.sortBy(this.coordinates,function(a){return a.x})},_createFirstSpline:function(){var a={};a.a=this.coordinates[0].y,a.b=0,a.c=0,a.d=this.coordinates[1].y-a.a-a.b-a.c,this.splines.push(a)},_createRemainingSplines:function(){var b,c,d;for(b=2;b<this.coordinates.length;b++)d=[_.values(this.splines[b-2])],d=a.matrixMultiply(d,this.pascalMatrix),d={a:d[0][0],b:d[0][1],c:d[0][2],d:d[0][3]},c={a:d.a,b:d.b,c:d.c,d:this.coordinates[b].y-d.a-d.b-d.c},this.splines.push(c)}}}]);