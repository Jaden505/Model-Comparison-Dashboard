let express = require('express');
let app = express();
let port = 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  res.send('Hello World from the server!');
})

