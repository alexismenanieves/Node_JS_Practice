// We use const to avoid changing the received module
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hi!')
});

app.listen(3000, () => console.log('Server ready'));
// In case we want to end the process
process.on('SIGTERM', () =>{
  server.close(() => {
    console.log('Process terminated');
  })
});