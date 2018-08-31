var rp = require('request-promise'); 
var track = function (api_token, contact_uid, event_uid, params) {
  var data = {contact_uid: contact_uid, event_uid: event_uid, params: params}
  var options = {
      uri: 'https://api.salesmachine.io/v1/track/event',
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
module.exports = track
