//@ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthResponse;
  register: AuthResponse;
  resendVerificationEmail: Scalars['String']['output'];
  verifyEmail: Scalars['String']['output'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterInput>;
};


export type MutationVerifyEmailArgs = {
  otp?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type RegisterMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type VerifyEmailMutationVariables = Exact<{
  otp?: InputMaybe<Scalars['Int']['input']>;
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: string };

export type ResendVerificationEmailMutationVariables = Exact<{ [key: string]: never; }>;


export type ResendVerificationEmailMutation = { __typename?: 'Mutation', resendVerificationEmail: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, email: string } };



export const RegisterDocument = `
    mutation register($name: String!, $email: String!, $password: String!) {
  register(input: {name: $name, email: $email, password: $password}) {
    accessToken
    user {
      id
    }
  }
}
    `;

export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      ['register'],
      (variables?: RegisterMutationVariables) => fetcher<RegisterMutation, RegisterMutationVariables>(client, RegisterDocument, variables, headers)(),
      options
    )};


useRegisterMutation.fetcher = (client: GraphQLClient, variables: RegisterMutationVariables, headers?: RequestInit['headers']) => fetcher<RegisterMutation, RegisterMutationVariables>(client, RegisterDocument, variables, headers);

export const LoginDocument = `
    mutation login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    accessToken
    user {
      id
      name
      email
    }
  }
}
    `;

export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    )};


useLoginMutation.fetcher = (client: GraphQLClient, variables: LoginMutationVariables, headers?: RequestInit['headers']) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers);

export const VerifyEmailDocument = `
    mutation verifyEmail($otp: Int) {
  verifyEmail(otp: $otp)
}
    `;

export const useVerifyEmailMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<VerifyEmailMutation, TError, VerifyEmailMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<VerifyEmailMutation, TError, VerifyEmailMutationVariables, TContext>(
      ['verifyEmail'],
      (variables?: VerifyEmailMutationVariables) => fetcher<VerifyEmailMutation, VerifyEmailMutationVariables>(client, VerifyEmailDocument, variables, headers)(),
      options
    )};


useVerifyEmailMutation.fetcher = (client: GraphQLClient, variables?: VerifyEmailMutationVariables, headers?: RequestInit['headers']) => fetcher<VerifyEmailMutation, VerifyEmailMutationVariables>(client, VerifyEmailDocument, variables, headers);

export const ResendVerificationEmailDocument = `
    mutation resendVerificationEmail {
  resendVerificationEmail
}
    `;

export const useResendVerificationEmailMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ResendVerificationEmailMutation, TError, ResendVerificationEmailMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<ResendVerificationEmailMutation, TError, ResendVerificationEmailMutationVariables, TContext>(
      ['resendVerificationEmail'],
      (variables?: ResendVerificationEmailMutationVariables) => fetcher<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>(client, ResendVerificationEmailDocument, variables, headers)(),
      options
    )};


useResendVerificationEmailMutation.fetcher = (client: GraphQLClient, variables?: ResendVerificationEmailMutationVariables, headers?: RequestInit['headers']) => fetcher<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>(client, ResendVerificationEmailDocument, variables, headers);

export const MeDocument = `
    query me {
  me {
    id
    name
    email
  }
}
    `;

export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['me'] : ['me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
      options
    )};

useMeQuery.getKey = (variables?: MeQueryVariables) => variables === undefined ? ['me'] : ['me', variables];


useMeQuery.fetcher = (client: GraphQLClient, variables?: MeQueryVariables, headers?: RequestInit['headers']) => fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers);
