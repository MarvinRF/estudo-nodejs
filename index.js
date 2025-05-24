const express = require("express");
const server = express();

server.use(express.json());

let customers = [
  {
    id: 1,
    name: "Diego",
    site: "rocketseat.com.br",
  },
  {
    id: 2,
    name: "Gabriel",
    site: "rocketseat.com.br",
  },
  {
    id: 3,
    name: "Lucas",
    site: "rocketseat.com.br",
  },
];

server.get("/customers", (req, res) => {
  return res.json({
    sucess: true,
    data: customers,
  });
});
server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((item) => item.id === id);
  const status = customer ? 200 : 404;
  return res.status(status).json({
    sucess: true,
    data: customer,
  });
});

server.post("/customers", (req, res) => {
  const { name, site } = req.body;
  const id = customers[customers.length - 1].id + 1;
  const customer = {
    id,
    name,
    site,
  };
  customers.push(customer);
  return res.status(201).json({
    sucess: true,
    data: customer,
  });
});

server.listen(3000);
