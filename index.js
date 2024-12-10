const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Digital Library Server');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
