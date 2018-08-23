var heapdump = require('heapdump')

//heapdump.writeSnapshot('bikesh/' + Date.now() + '.heapsnapshot');

//setInterval(function () {
	
//	console.log("processing heap dump...");
//  	heapdump.writeSnapshot()
// }, 1000 )


heapdump.writeSnapshot( Date.now() + '.heapsnapshot');

console.log("done");
