import { GraphQLClient } from 'graphql-request';

import envConfig from '../utils/envConfig';
import { getAccessToken } from '../utils/tokensHelper';

type API_SERVICE = 'magunaServer';

const url = (service: API_SERVICE) => {
  switch (service) {
    case 'magunaServer':
      return envConfig.SERVER_URL;
  }
};

const graphqlRequestClient = (
  service: API_SERVICE = 'magunaServer',
): GraphQLClient => {
  const gqlClient = new GraphQLClient(`${url(service)}/graphql` as string);

  getAccessToken().then(accessToken => {
    if (accessToken) {
      gqlClient.setHeader('authorization', `Bearer ${accessToken}`);
    }
  });

  return gqlClient;
};

export default graphqlRequestClient;
