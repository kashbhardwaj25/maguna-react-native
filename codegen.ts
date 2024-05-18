import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['./src/graphql/magunaServer/*.gql'],
  ignoreNoDocuments: true,
  generates: {
    './src/services/api/': {
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
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
      preset: 'client',
    },
  },
};

export default config;
