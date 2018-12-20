

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
   
  let s= ['aaa','bbb','ccc','ddd'];

  function display(i){
      if(i < s.length){
         console.log(s[i]);
      }
      
      setTimeout(function(){
         display(i + 1)
      }, 2000)
  }

  display(0)
  
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});