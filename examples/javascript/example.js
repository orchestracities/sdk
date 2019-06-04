var prompt = require('prompt');

var properties = [
  {
    name: 'username',
  },
  {
    name: 'password',
    hidden: true,
  },
  {
    name: 'apiKey',
    hidden: true,
  },
  {
    name: 'clientId',
    hidden: true,
  },
  {
    name: 'clientSecret',
    hidden: true,
  },
  {
    name: 'scope',
  },
];

prompt.start();

prompt.get(properties, function(err, result) {
  if (err) {
    return onErr(err);
  }

  var request = require('request');

  var url =
    'https://auth.s.orchestracities.com/auth/realms/default/protocol/openid-connect/token';
  var headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  var form = {
    username: result.username,
    password: result.password,
    client_id: 'resource_server',
    client_secret: '006ce147-dd78-42db-a78a-1b5b0f3a723f',
    grant_type: 'password',
    scope: 'entity:create entity:read',
  };

  request.post({ url: url, form: form, headers: headers }, function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode === 200) {
      var json = JSON.parse(body);
      var token = json['access_token'];
      console.log('scope: ' + json['scope']);
      console.log('token: ' + token);
      testAPI(token, result.apiKey);
      return 1;
    } else {
      console.error('invalid user/password');
      console.error('status code:' + response.statusCode);
      return 1;
    }
  });
  return 1;
});

function onErr(err) {
  console.log(err);
  return 1;
}

function testAPI(token, apiKey) {
  var NgsiV2 = require('ngsi_v2');
  let defaultClient = NgsiV2.ApiClient.instance;
  // Configure API key authorization: ApiKeyAuth
  let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
  ApiKeyAuth.apiKey = apiKey;
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  //ApiKeyAuth.apiKeyPrefix = 'Token';
  // Configure Bearer (JWT) access token for authorization: BearerAuth
  let BearerAuth = defaultClient.authentications['BearerAuth'];
  BearerAuth.accessToken = token;

  let apiInstance = new NgsiV2.APIEntryPointApi();
  apiInstance.retrieveAPIResources((error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data)
      );
    }
  });

  apiInstance = new NgsiV2.EntitiesApi();
  let opts = {
    fiwareService: 'OrchestraCities', // String |
    fiwareServicePath: '/EnvironmentManagement',
  };
  apiInstance.listEntities(opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data)
      );
    }
  });

  apiInstance = new NgsiV2.EntitiesApi();
  let entityId = 'urn:ngsi-ld:WeatherObserved:zurich'; // String | Id of the entity to be retrieved
  apiInstance.retrieveEntity(entityId, opts, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data)
      );
    }
  });

  apiInstance.retrieveEntityAttributes(
    entityId,
    opts,
    (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(
          'API called successfully. Returned data: ' + JSON.stringify(data)
        );
      }
    }
  );

  let attrName = 'atmosphericPressure'; // String | Name of the attribute to be retrieved.
  apiInstance = new NgsiV2.AttributesApi();
  apiInstance.getAttributeData(
    entityId,
    attrName,
    opts,
    (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log(
          'API called successfully. Returned data: ' + JSON.stringify(data)
        );
      }
    }
  );
}
