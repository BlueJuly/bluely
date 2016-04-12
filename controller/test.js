var y = `function xx () {
	 // body... 
	 console.log("test"); 
}`;

// var y=xx.toString();
console.log('(' + y + ')')
eval('(' + y + ')').call();
// console.log(eval('(' + y + ')'));

// xx();
var i=eval("1+1")
console.log(i)

var f = new Function("console.log('test')", "1 + 4");

f();