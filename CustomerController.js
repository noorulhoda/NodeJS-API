const Customer = require('./Customer.model');

module.exports = {

  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Customer.find({}).limit(limit)
    .then(customers => res.status(200).send(customers))
    .catch(next)
  },

  create(req, res, next){
    const customerProps = req.body;
    console.log(customerProps);
    Customer.create(customerProps)
      .then(customer =>
        res.status(201).send(customer)) 
      .catch(next) 

  },

 edit(req, res, next){
    const CustomerId = req.params.id;
    const customerProps = req.body;
    Customer.findByIdAndUpdate({_id: customerId}, customerProps)
    .then(() => Customer.findById({_id: customerId}))
    .then(customer => res.status(200).send(customer))
    .catch(next);
  },

  delete(req, res, next){
    const customerId = req.params.id;
    Customer.findByIdAndRemove({_id: customerId})
      .then(customer => res.status(204).send(customer))
      .catch(next);
  }
};