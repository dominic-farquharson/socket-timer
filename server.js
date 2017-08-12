const io = require('socket.io')();

/*
 *
 * Publishing (emit) events to client
 *
 */

io.on('connection', (client) => {
  console.log('client', client);

  // handling client connection
  client.on('subscribeToTimer', (interval) => {
    console.log(`client is subscribing to timer with interval ${interval}` );

    // emitting event back to client
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval)
  })
})

// listening for clients
const PORT = process.env.PORT || 8000;
io.listen(PORT);
console.log(`Listening on PORT: ${PORT}`)
