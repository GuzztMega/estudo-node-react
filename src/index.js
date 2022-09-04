const express = require("express"); // importa a biblioteca express
const server = express(); //instancia o objeto express

server.use(express.json());

//rodar servidor
// server.get('/teste', (req,res) =>{
//   res.send("Dessa vez foi. Ai sim ein bichão");
// });
server.get('/teste', (req,res) =>{
  res.send("Ta na teste, mano");
});

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);
server.listen(3000, () => {
  console.log("Executando...");
});
