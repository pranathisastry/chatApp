var crypto = require('crypto');

//method for encrypting password.
module.exports.encryptPassword = function(password){
  var hash = crypto.createHmac('pranu44',password)
                   .update("mykey")
                   .digest('hex');
  return hash
};