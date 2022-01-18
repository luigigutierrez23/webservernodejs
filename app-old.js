const http = require("http");

http
  .createServer((req, res) => {
    // res.write("Hi world");
    res.writeHead(200, { "Content-Type": "application/json" });

    const person = {
      id: 1,
      name: "Fernando",
    };

    res.write(JSON.stringify(person));
    res.end();
  })
  .listen(8081);

console.log("Listening on port 8081");
