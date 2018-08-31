var rp = require('request-promise');
var account = function (api_token, account_uid, params) {
  var data = {account_uid: account_uid, params: params}
  var options = {
      uri: 'https://api.salesmachine.io/v1/account',
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

module.exports = account
