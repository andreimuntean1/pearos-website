export function detectAdblock(callback) {
  var flaggedURL = 'https://adblockanalytics.com';

  if (window.fetch) {
    var request = new Request(flaggedURL, {
      method: 'HEAD',
      mode: 'no-cors',
    });
    fetch(request)
      .then(function(response) {
        if (response.status === 404) {
          callback(false);
        } else {
          callback(false);
        }
      })
      .catch(function(error) {
        callback(true);
      });
  } else {
    var http = new XMLHttpRequest();
    http.open('HEAD', flaggedURL, false);

    try {
      http.send();
    } catch (err) {
      callback(true);
    }

    if (http.status === 404) {
      callback(false);
    } else {
      callback(false);
    }
  }
}