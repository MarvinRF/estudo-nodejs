class CustomersController {
  constructor() {
    this.customers = [
      {
        id: 1,
        name: 'Diego',
        site: 'rocketseat.com.br',
      },
      {
        id: 2,
        name: 'Gabriel',
        site: 'rocketseat.com.br',
      },
      {
        id: 3,
        name: 'Lucas',
        site: 'rocketseat.com.br',
      },
    ];
  }

  //listagen de Customers
  index(req, res) {
    return res.json({
      sucess: true,
      data: this.customers,
    });
  }

  //Recupera um customer
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = this.customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;
    return res.status(status).json({
      sucess: true,
      data: customer,
    });
  }

  //Cria um novo customer
  create(req, res) {
    const { name, site } = req.body;
    const id = this.customers[this.customers.length - 1].id + 1;
    const customer = {
      id,
      name,
      site,
    };
    this.customers.push(customer);
    return res.status(201).json({
      sucess: true,
      data: customer,
    });
  }

  //Atualiza um customer
  update(req, res) {
    const { name, site } = req.body;
    const id = parseInt(req.params.id);

    const index = this.customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      this.customers[index] = {
        id: parseInt(id),
        name,
        site,
      };
      return res.status(status).json({
        sucess: true,
        data: this.customers[index],
      });
    }
    if (index < 0) {
      return res.status(404).json({
        sucess: false,
        message: 'Customer not found',
      });
    }
  }

  //Deleta um customer
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = this.customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;
    if (index >= 0) {
      this.customers.splice(index, 1);
      return res.status(status).json({
        sucess: true,
        data: {
          message: 'Customer deleted successfully',
        },
      });
    }
    return res.status(404).json({
      sucess: false,
      message: 'Customer not found',
    });
  }
}

export default new CustomersController();
