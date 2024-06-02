const platformClient = require("purecloud-platform-client-v2");

const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.us_east_1); // Genesys Cloud region

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
//client.setAccessToken("your_access_token");
//const clientId = "d6e3ad13-574a-49d9-9d88-1f2c84a0db84";
//const clientSecret = "AmiDoqO-k5BtAWFNXmYGDn685omH_YOvI6gofNBvF4c";
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
client.loginClientCredentialsGrant(clientId, clientSecret)
    .then(() => {    
let apiInstance = new platformClient.UsersApi();

let opts = { 
  "pageSize": 25, // Number | Page size
  "pageNumber": 1, // Number | Page number
  //"id": ["id_example"], // [String] | A list of user IDs to fetch by bulk
  //"jabberId": ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  "sortOrder": "ASC", // String | Ascending or descending sort order
  //"expand": ["expand_example"], // [String] | Which fields, if any, to expand
  //"integrationPresenceSource": "integrationPresenceSource_example", // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
  "state": "active" // String | Only list users of this state
};

// Get the list of available users.
apiInstance.getUsers(opts)
  .then((data) => {
    console.log(`getUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log("There was a failure calling getUsers");
    console.error(err);
  });
})
.catch((err) => {
    console.log("There was a failure calling loginClientCredentialsGrant");
    console.error(err);
});

