# MongoDB Realm GraphQL - Apollo (React)

This code demonstrates how to connect to your MongoDB Realm app's [GraphQL
API](https://docs.mongodb.com/realm/graphql) from a React application using [Apollo Client
3](https://www.apollographql.com/docs/react/). For a detailed walkthrough, check out [Use GraphQL
with Apollo Client (React)](https://docs.mongodb.com/realm/web/graphql-apollo-react) in the MongoDB
Realm documentation.

## Set Up

1. Clone the Repository

   ```shell
   git clone https://github.com/mongodb-university/realm-graphql-apollo-react
   cd realm-graphql-apollo-react
   ```

2. Install the dependencies

   Install the project dependencies with `npm`:
   
   ```shell
   npm install
   ```

3. Load the Sample Data

   In MongoDB Atlas, [load the sample datasets into your
   cluster](https://docs.atlas.mongodb.com/sample-data/).

4. Create a MongoDB Realm App

   In the same project, [create a new MongoDB Realm
   app](https://docs.mongodb.com/realm/procedures/create-realm-app/). Make sure that the app is
   linked to the cluster that has the sample data.

5. Generate a Schema

   Navigate to the `sample_mflix.movies` collection in the Realm UI and generate a schema based on
   the sample data. When you save the schema, Realm automatically generates corresponding GraphQL
   types.

6. Enable Anonymous Authentication

   This sample app automatically logs in as an anonymous user, so make sure that you enable the
   Anonymous provider.

7. Add Your App ID

   [Find your App ID](https://docs.mongodb.com/realm/get-started/find-your-app-id/) and paste it
   into ``src/index.js``.

8. Run the App

   ```shell
   npm run start
   ```
