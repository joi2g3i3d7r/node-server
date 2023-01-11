# Sample server

# Configuration

## Previous configuration

Node use v18

It is necessary that the database has configuration and database created

_Sample test connection to database:_

> mysql -h localhost -u root -p

## 1. Install dependencies

_mode development_

> `npm install`

_mode production_

> `npm install --production`

## 2. Load variables environment

Copy from sample file _.env.sample_ and changue values

```properties
DATABASE_USER=root
DATABASE_PASSWORD=qwerty
DATABASE_HOSTNAME=localhost
DATABASE_PORT=3306
DATABASE_NAME=demo
```

## Start server

When you start the server it will also run the migrations

_start server (development):_

> npm run dev

_start server (production):_

> npm start

# Testing API

API: `http://localhost:3000/api/v1/users` and query parameters pass in format: `/?username=&password=`

_Sample (Copy & paste):_

```properties
curl "http://localhost:3000/api/v1/users?username=admin&password=admin"
```

_expected:_

```json
{ "fullname": "Jhon Doe" }
```
