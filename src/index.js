// React
import React from "react";
import { render } from "react-dom";
// Apollo
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
// Realm
import * as Realm from "realm-web";
// Check out app.js for examples of how to run GraphQL operations
import App from "./App";

// To set up your app:
//
// 1. Link a cluster that includes the MongoDB Atlas sample data sets
// 2. Configure permissions for the ``sample_mflix.movies`` collection. For this
//    demo, you can assign full read/write permissions to the default role.
// 3. Generate a collection schema for the ``sample_mflix.movies`` collection.
// 4. Enable anonymous authentication
// 5. Deploy your changes
//
// Once your app is set up, replace the value of APP_ID with your App ID
export const APP_ID = "<Your App ID>";

const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

const app = new Realm.App(APP_ID);

// Get a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // The logged in user's access token might be stale.
    // Refreshing custom data also refreshes the access token.
    await app.currentUser.refreshCustomData();
  }
  // Get a valid access token for the current user
  const { accessToken } = app.currentUser;
  return accessToken
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphql_url,
    // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
    // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
    // access token before sending the request.
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache()
});

// Wrap your app with an ApolloProvider
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
