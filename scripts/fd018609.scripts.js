"use strict";angular.module("algorithmsApp",["ngRoute","angulartics","angulartics.google.analytics"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"main"}).when("/extended-euclidean-algorithm",{templateUrl:"views/extendedEuclideanAlgorithm.html",controller:"extendedEuclideanAlgorithm"}).when("/chinese-remainder-theorem",{templateUrl:"views/chineseRemainderTheorem.html",controller:"chineseRemainderTheorem"}).when("/gaussian-elimination",{templateUrl:"views/gaussianElimination.html",controller:"gaussianElimination"}).when("/invert-matrix",{templateUrl:"views/invertMatrix.html",controller:"invertMatrix"}).when("/smith-normal-form",{templateUrl:"views/smithNormalForm.html",controller:"SmithNormalForm"}).otherwise({redirectTo:"/"})}]).run(["Helpers",function(){}]),angular.module("algorithmsApp").controller("main",["$scope",function(a){a.algorithms=[{name:"Chinese remainder theorem",description:"Solves a system of congruence equations",url:"chinese-remainder-theorem"},{name:"Extended euclidean algorithm",description:"Calculates the greates common divisor",url:"extended-euclidean-algorithm"},{name:"Gaussian elimination",description:"Row reduces a matrix",url:"gaussian-elimination"},{name:"Invert matrix",description:"Inverts a matrix with the gaussian elimination",url:"invert-matrix"},{name:"Smith normal form",description:"Translate a matrix smith normal form",url:"smith-normal-form"}]}]),angular.module("algorithmsApp").controller("extendedEuclideanAlgorithm",["$scope","ExtendedEuclideanAlgorithm","Utils",function(a,b,c){a.a=120,a.b=23,a.gcd=void 0,a.x=void 0,a.y=void 0,a.steps=[],a.calc=function(){var c=b.calculate(a.a,a.b);a.x=c.x,a.y=c.y,a.gcd=c.gcd,a.steps=c.steps},a.random=function(){a.a=c.randomNumber(2,1e4),a.b=c.randomNumber(2,1e4),a.calc()},a.cyclicColor=function(a){var b=["#990000","#006600","#000099","#FF6600","#000000"];return b[a%b.length]},a.calc()}]),angular.module("algorithmsApp").controller("chineseRemainderTheorem",["$scope","ChineseRemainderTheorem","Utils",function(a,b,c){a.x="x",a.rows=[{m:3,a:2},{m:4,a:3},{m:5,a:2}],a.addRow=function(){a.rows.push({m:c.randomNumber(2,100),a:c.randomNumber(2,100)}),a.calculate()},a.dropRow=function(b){a.rows.splice(b,1),a.calculate()},a.calculate=function(){var c=[],d=[];a.rows.forEach(function(a){c.push(a.a),d.push(a.m)}),a.x=b.calculate(c,d)},a.calculate()}]),angular.module("algorithmsApp").service("ExtendedEuclideanAlgorithm",function(){return{calculate:function(a,b){var c,d,e,f,g,h,i=[],j=2;i.push({remainder:Math.abs(a),combinationA:Math.sign(a),combinationB:0}),i.push({remainder:Math.abs(b),combinationA:0,combinationB:Math.sign(b)});do e=parseInt(i[j-2].remainder/i[j-1].remainder,10),f=i[j-2].remainder%i[j-1].remainder,g=i[j-2].combinationA-i[j-1].combinationA*e,h=i[j-2].combinationB-i[j-1].combinationB*e,i.push({quotient:e,remainder:f,combinationA:g,combinationB:h}),j++;while(f>0);return i.pop(),c=i[j-2].combinationA,d=i[j-2].combinationB,{x:c,y:d,gcd:a*c+b*d,steps:i}}}}),angular.module("algorithmsApp").service("ChineseRemainderTheorem",["ExtendedEuclideanAlgorithm",function(a){return{calculate:function(b,c){if(!(b instanceof Array&&c instanceof Array&&b.length===c.length))return!1;var d=1,e=0,f=b.length;c.forEach(function(a){d*=a});for(var g=0;f>g;g++){var h=c[g],i=d/h,j=a.calculate(i,h).x,k=j*i;e+=b[g]*k}return(e%d+d)%d}}}]),angular.module("algorithmsApp").service("Utils",function(){return{randomNumber:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},identityMatrix:function(a){for(var b=[],c=0;a>c;c++){b.push([]);for(var d=0;a>d;d++)b[c][d]=c===d?1:0}return b},matrixMultiply:function(a,b){for(var c=[],d=0;d<a.length;d++){c[d]=[];for(var e=0;e<b[0].length;e++){for(var f=0,g=0;g<b.length;g++)f+=b[g][e]*a[d][g];c[d].push(f)}}return c},matrixTranspose:function(a){return Object.keys(a[0]).map(function(b){return a.map(function(a){return a[b]})})}}}),angular.module("algorithmsApp").service("GaussianElimination",["Utils",function(a){return{eliminate:function(a){var b,c,d,e,f,g,h=a.clone(),i=h.length,j=h[0].length;for(b=0;i>b;b++){for(g=this._findPivotRowForColumn(h,b),this._swapRows(h,g,b),e=h[b][b],d=b;j>d&&e;d++)h[b][d]/=e,this._roundElement(h,b,d);for(c=0;i>c;c++)if(c!==b)for(f=h[c][b],d=b;j>d&&f;d++)h[c][d]-=f*h[b][d],this._roundElement(h,c,d)}return h},invert:function(b){var c,d,e,f,g,h,i=b.clone(),j=i.length,k=a.identityMatrix(j);if(i.length!=i[0].length)return!1;for(c=0;j>c;c++){for(h=this._findPivotRowForColumn(i,c),this._swapRows(i,h,c),this._swapRows(k,h,c),f=i[c][c],e=0;j>e&&f;e++)i[c][e]/=f,this._roundElement(i,c,e),k[c][e]/=f,this._roundElement(k,c,e);for(d=0;j>d;d++)if(d!==c)for(g=i[d][c],e=0;j>e&&g;e++)i[d][e]-=g*i[c][e],this._roundElement(i,d,e),k[d][e]-=g*k[c][e],this._roundElement(k,d,e)}return 1!==i[j-1][j-1]?!1:k},_swapRows:function(a,b,c){var d=a[c];a[c]=a[b],a[b]=d},_findPivotRowForColumn:function(a,b){for(var c=0,d=b,e=b;e<a.length;e++)c<Math.abs(a[e][b])&&(c=Math.abs(a[e][b]),d=e);return d},_roundElement:function(a,b,c){a[b][c]=+a[b][c].toPrecision(10)}}}]),angular.module("algorithmsApp").controller("gaussianElimination",["$scope","GaussianElimination","Utils",function(a,b,c){a.inputMatrix=[[1,2,3],[4,5,6],[7,8,9]],a.resultMatrix=[[0,0,0],[0,0,0],[0,0,0]],a.eliminate=function(){a.resultMatrix=b.eliminate(a.inputMatrix)},a.addRow=function(){for(var b=[],d=0;d<a.inputMatrix[0].length;d++)b.push(c.randomNumber(-10,20));a.inputMatrix.push(b),a.eliminate()},a.addColumn=function(){a.inputMatrix.forEach(function(a){a.push(c.randomNumber(-10,20))}),a.eliminate()},a.deleteRow=function(b){1!==a.inputMatrix.length&&(a.inputMatrix.splice(b,1),a.eliminate())},a.deleteColumn=function(b){1!==a.inputMatrix[0].length&&(a.inputMatrix.forEach(function(a){a.splice(b,1)}),a.eliminate())},a.eliminate()}]),angular.module("algorithmsApp").controller("invertMatrix",["$scope","GaussianElimination","Utils",function(a,b,c){a.inputMatrix=[[0,-1,0],[0,0,-1],[4,0,2]],a.invert=function(){a.outputMatrix=b.invert(a.inputMatrix)},a.makeBigger=function(){for(var b=[],d=0;d<a.inputMatrix[0].length;d++)b.push(c.randomNumber(-10,20));a.inputMatrix.push(b),a.inputMatrix.forEach(function(a){a.push(c.randomNumber(-10,20))}),a.invert()},a.makeSmaller=function(){a.inputMatrix.pop(),a.inputMatrix.forEach(function(a){a.pop()}),a.invert()},a.invert()}]),angular.module("algorithmsApp").service("SmithNormalForm",["Utils","ExtendedEuclideanAlgorithm",function(a,b){return{m:null,B:null,S:null,T:null,calculate:function(b){this.m=b.length,this.B=b.clone(),this.S=a.identityMatrix(this.m),this.T=a.identityMatrix(this.m);for(var c=0;c<this.m-1;c++){for(var d=c+1;d<this.m;d++)this._doStep(c,d,!0);for(var e=c+1;e<this.m;e++)this._doStep(c,e,!1)}return{B:this.B,S:this.S,T:this.T,elementaryDivisors:this._getElementaryDivisors()}},_doStep:function(c,d,e){var f=this.B[c][c],g=e?this.B[d][c]:this.B[c][d];if(0!==f*g){var h=b.calculate(f,g),i=h.x,j=h.y,k=-(g/h.gcd),l=f/h.gcd,m=a.identityMatrix(this.m);e?(m[c][c]=i,m[c][c+1]=j,m[d][c]=k,m[d][c+1]=l,this.S=a.matrixMultiply(m,this.S),this.B=a.matrixMultiply(m,this.B)):(m[c][c]=l,m[c][d]=k,m[c+1][c]=j,m[c+1][d]=i,this.T=a.matrixMultiply(this.T,m),this.B=a.matrixMultiply(this.B,m))}},_getElementaryDivisors:function(){for(var a=[],b=0;b<this.B.length;b++)a.push(Math.abs(this.B[b][b]));return a}}}]),angular.module("algorithmsApp").service("Helpers",function(){Array.prototype.clone=function(){for(var a=this.slice(0),b=0;b<this.length;b++)this[b].clone&&(a[b]=this[b].clone());return a},Math.sign=function(a){return a?0>a?-1:1:0}}),angular.module("algorithmsApp").controller("SmithNormalForm",["$scope","SmithNormalForm","Utils",function(a,b,c){a.A=[[2,4,4],[-6,6,12],[10,-4,-16]],a.calculate=function(){var c=b.calculate(a.A);a.B=c.B,a.S=c.S,a.T=c.T,a.elementaryDivisors=c.elementaryDivisors},a.makeBigger=function(){for(var b=[],d=0;d<a.A[0].length;d++)b.push(c.randomNumber(-10,20));a.A.push(b),a.A.forEach(function(a){a.push(c.randomNumber(-10,20))}),a.calculate()},a.makeSmaller=function(){a.A.pop(),a.A.forEach(function(a){a.pop()}),a.calculate()},a.calculate()}]);