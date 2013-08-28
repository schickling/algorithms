"use strict";angular.module("algorithmsApp",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/extended-euclidean-algorithm",{templateUrl:"views/extendedEuclideanAlgorithm.html",controller:"extendedEuclideanAlgorithm"}).when("/chinese-remainder-theorem",{templateUrl:"views/chineseRemainderTheorem.html",controller:"chineseRemainderTheorem"}).when("/gaussian-elimination",{templateUrl:"views/gaussianElimination.html",controller:"gaussianElimination"}).otherwise({redirectTo:"/"})}]),angular.module("algorithmsApp").controller("MainCtrl",["$scope",function(a){a.algorithms=[{name:"Chinese remainder theorem",url:"chinese-remainder-theorem"},{name:"Extended euclidean algorithm",url:"extended-euclidean-algorithm"},{name:"Gaussian elimination",url:"gaussian-elimination"}]}]),angular.module("algorithmsApp").controller("extendedEuclideanAlgorithm",["$scope","ExtendedEuclideanAlgorithm","Utils",function(a,b,c){a.a=120,a.b=23,a.gcd=void 0,a.x=void 0,a.y=void 0,a.steps=[],a.calc=function(){var c=b.calculate(a.a,a.b);a.x=c.x,a.y=c.y,a.gcd=c.gcd,a.steps=c.steps},a.random=function(){a.a=c.randomNumber(2,1e4),a.b=c.randomNumber(2,1e4),a.calc()},a.cyclicColor=function(a){var b=["#990000","#006600","#000099","#FF6600","#000000"];return b[a%b.length]},a.calc()}]),angular.module("algorithmsApp").controller("chineseRemainderTheorem",["$scope","ChineseRemainderTheorem","Utils",function(a,b,c){a.x="x",a.rows=[{m:3,a:2},{m:4,a:3},{m:5,a:2}],a.addRow=function(){a.rows.push({m:c.randomNumber(2,100),a:c.randomNumber(2,100)}),a.calculate()},a.dropRow=function(b){a.rows.splice(b,1),a.calculate()},a.calculate=function(){var c=[],d=[];a.rows.forEach(function(a){c.push(a.a),d.push(a.m)}),a.x=b.calculate(c,d)},a.calculate()}]),angular.module("algorithmsApp").service("ExtendedEuclideanAlgorithm",function(){return{calculate:function(a,b){var c,d,e,f,g,h,i=[],j=2;i.push({remainder:a,combinationA:1,combinationB:0}),i.push({remainder:b,combinationA:0,combinationB:1});do e=parseInt(i[j-2].remainder/i[j-1].remainder,10),f=i[j-2].remainder%i[j-1].remainder,g=i[j-2].combinationA-i[j-1].combinationA*e,h=i[j-2].combinationB-i[j-1].combinationB*e,i.push({quotient:e,remainder:f,combinationA:g,combinationB:h}),j++;while(f>0);return i.pop(),c=i[j-2].combinationA,d=i[j-2].combinationB,{x:c,y:d,gcd:a*c+b*d,steps:i}}}}),angular.module("algorithmsApp").service("ChineseRemainderTheorem",["ExtendedEuclideanAlgorithm",function(a){return{calculate:function(b,c){if(!(b instanceof Array&&c instanceof Array&&b.length===c.length))return!1;var d=1,e=0,f=b.length;c.forEach(function(a){d*=a});for(var g=0;f>g;g++){var h=c[g],i=d/h,j=a.calculate(i,h).x,k=j*i;e+=b[g]*k}return(e%d+d)%d}}}]),angular.module("algorithmsApp").service("Utils",function(){return{randomNumber:function(a,b){return a+Math.floor(Math.random()*(b-a+1))}}}),angular.module("algorithmsApp").service("GaussianElimination",function(){return Array.prototype.clone=function(){for(var a=this.slice(0),b=0;b<this.length;b++)this[b].clone&&(a[b]=this[b].clone());return a},{matrix:null,eliminate:function(a){this.matrix=a.clone();var b,c,d,e,f,g,h=this.matrix.length,i=this.matrix[0].length;for(b=0;h>b;b++){for(g=this._findPivotRowForColumn(b),this._swapRows(g,b),e=this.matrix[b][b],d=b;i>d&&e;d++)this.matrix[b][d]/=e;for(c=0;h>c;c++)if(c!==b)for(f=this.matrix[c][b],d=b;i>d;d++)this.matrix[c][d]-=f*this.matrix[b][d]}return this.matrix},_swapRows:function(a,b){var c=this.matrix[b];this.matrix[b]=this.matrix[a],this.matrix[a]=c},_findPivotRowForColumn:function(a){for(var b=0,c=a,d=a;d<this.matrix.length;d++)b<this.matrix[d][a]&&(b=this.matrix[d][a],c=d);return c}}}),angular.module("algorithmsApp").controller("gaussianElimination",["$scope","GaussianElimination","Utils",function(a,b,c){a.inputMatrix=[[1,2,3],[4,5,6],[7,8,9]],a.resultMatrix=[[0,0,0],[0,0,0],[0,0,0]],a.eliminate=function(){a.resultMatrix=b.eliminate(a.inputMatrix)},a.addRow=function(){for(var b=[],d=0;d<a.inputMatrix[0].length;d++)b.push(c.randomNumber(-10,20));a.inputMatrix.push(b),a.eliminate()},a.addColumn=function(){a.inputMatrix.forEach(function(a){a.push(c.randomNumber(-10,20))}),a.eliminate()},a.deleteRow=function(b){1!==a.inputMatrix.length&&(a.inputMatrix.splice(b,1),a.eliminate())},a.deleteColumn=function(b){1!==a.inputMatrix[0].length&&(a.inputMatrix.forEach(function(a){a.splice(b,1)}),a.eliminate())},a.eliminate()}]);