import express from 'express';
import cors from 'cors';
import client from './database/index.js';
import { getUsers, addUsers, updateUser, deleteUser } from './queries/index.js';

const app = express();
const port = process.env.PORT || 8800;

app.use(cors());
app.use(express.json());

client.connect();

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'hello world',
  });
});

//create
app.post('/users', addUsers)

//read
app.get('/users', getUsers);

//update
app.put('/users/:userid', updateUser)
//delete
app.delete('/users/:userid', deleteUser)

app.listen(port, () => {
  console.log(`Server connected at  http://localhost:${port}`);
});
