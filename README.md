[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

# Shaparoo SQLite Backend

Node.js server providing API access to an SQLite database for Shaparoo front end application.

## Environment

The expected environment variables are listed in .sample-env. Either set these variables in your platform-as-service provider or, from the project root, copy the .sample-env to config.env and fill in local values.

## Setting up the database

When the server starts it populates a database file with the shaparoo schema using the filename given in the config.env file or the default name. If you change the value of the DBFILE key, it will create a new database file the next time the server runs. A file with the name of the database needs to exist.

For example:

### `touch db\shaparoodb.sqlite`

## Run

In the project directory, you can run:

### `npm install`

### `node server.js`
