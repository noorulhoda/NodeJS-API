var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CustomerSchema=new Schema({
userName:
{
    type: String,
    required: true
},
password:
{
    type: String,
    required: true
},
mobile:
{
    type: String,
    required: true
},
email:
{
    type: String,
    required: true
}

})


const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;