const express = require('express');
const knex = require('knex')(require('../db/knexfile.js').development);
const app = express();
app.use(express.json());

app.get('/api/paths', async (req, res) => {
  try {
    const paths = await knex('paths').select('*');
    res.json(paths);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch paths' });
  }
});

app.post('/api/paths', async (req, res) => {
  const { description, path } = req.body;
  try {
    await knex('paths').insert({ description, path });
    res.status(201).json({ message: 'Path added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add path' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
