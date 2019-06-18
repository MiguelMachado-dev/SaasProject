# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Create docker

Run the following command to create docker database.

```js
docker run --name databasesaas -p 5432:5432 -d -t kartoza/postgis
```

then, set up the .env and install pg

```js
npm i --save pg
```
