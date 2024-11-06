const mongoose = require ('mongoose')

module.exports = mongoose.model('Prdoucts',{
    name: String ,
    age : Number ,
    favfood : String
})
person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });

