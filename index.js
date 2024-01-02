const http = require("http");

http
  .createServer(function (req, res) {
    res.setHeader('Set-Cookie', [
      'myCookieAcrossSubdomain=myCookieValueAcrossSubdomain; domain=.gitpod.io; Path=/;'
    ]);
    res.writeHead(200);
    res.end("Open your browser's developer tools to view the cookies(myCookieAcrossSubdomain) set by the server");
  })
  .listen(8081);
