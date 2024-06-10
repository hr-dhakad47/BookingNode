const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' })); 

const clients = []; 

app.post('/addClient', (req, res) => {
  const { name, image } = req.body;
  const newClient = { id: clients.length + 1, name, image };
  clients.push(newClient);
  res.json({ message: 'Data received successfully', client: newClient });
});

app.get('/clients', (req, res) => {
  res.json(clients);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
