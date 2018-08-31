var rp = require('request-promise'); 
var contact = function (api_token, contact_uid, params) {
  var data = {contact_uid: contact_uid, params: params}
  var options = {
      uri: 'https://api.salesmachine.io/v1/contact',
      method: 'POST',
      body: data,
      auth: {
        user: api_token,
        pass: ''
      },
      headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
      },
      json: true // Automatically parses the JSON string in the response
  };
  return rp(options)
}

module.exports = contact
