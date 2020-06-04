# NOVABROS IMDB

## Setup

Install packages using yarn.

`yarn install`

Create a postgres docker image by running the following command in terminal:

```
docker run -d --name nimdb_postgres -e "POSTGRES_PASSWORD=password" -e "POSTGRES_USER=nimdb" -e "POSTGRES_DB=nimdb" -p 54320:5432 postgres
docker container start nimdb_postgres (after docker restart)
```

Run migrations and seed database with knex:

```
cd server
yarn knex migrate:latest
yarn knex seed:run
```

Start a dev server in the root directory

`yarn dev`

## Adding to GraphQL

### Server
1. Create a Query|Mutation function in new .js file in src/graphql/[Query|Mutation]
2. Import new function in `server/src/graphql/[Query|Mutation]/index.js`
3. Add the new function to the schema in `server/src/graphql/schema.graphql`

### Client
1. Test the Query|Mutation at http://localhost:4000/graphql/playground
2. Save the query in `client/src/graphql/[queries|mutations]/exampleOperation.graphql`
3. Run the gql-gen code generator (automatic while watching with `yarn dev`)
4. Import from `../../graphql` the methods made available via the codegen, e.g. `useExampleOperationQuery`|Mutation

## Testing

NIMDB uses Cypress for end-to-end testing. Start up Cypress running the following command:

`yarn run cypress open`
