// import { GraphQLClient } from 'graphql-request';

// import envConfig from '../../utils/envConfig';
// import { getTokens } from '../../utils/tokenHelper';

// type API_SERVICE = 'magunaServer';

// const url = (service: API_SERVICE) => {
//   switch (service) {
//     case 'magunaServer':
//       return envConfig.SERVER_URL;
//   }
// };

// const graphqlRequestClient = (
//   service: API_SERVICE = 'magunaServer',
// ): GraphQLClient => {
//   const gqlClient = new GraphQLClient(`${url(service)}/graphql` as string);

//   getTokens().then(data => {
//     if (data.accessToken) {
//       gqlClient.setHeader('authorization', `Bearer ${data.accessToken}`);
//     }
//   });

//   return gqlClient;
// };

// export default graphqlRequestClient;
