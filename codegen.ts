import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['./src/graphql/magunaServer/*.gql'],
  ignoreNoDocuments: true,
  generates: {
    './src/services/api/magunaServer.ts': {
      plugins: [
        {
          add: {
            content: '//@ts-nocheck',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        fetcher: 'graphql-request',
        reactQueryVersion: 5,
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
    },
  },
};

export default config;
