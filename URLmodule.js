const { log } = require('console')
var url = require('url')
var address = 'http://localhost:4000/default.com?year=2017&month=febaury;'

var q = url.parse(address,true)
console.log(q.host)
console.log(q.pathname);
console.log(q.search);


var qdata =q.query
console.log(qdata.month);