# Launch with Docker

1.  Make sure **`docker`** and **``docker-compose`** are installed and available from the terminal.

2.  Check the `.env` file. If **`DB_HOST=localhost`** string is in file, then remove it.

3.  Launch the app.

    make up

4.  Stop the app.

    make down

5.  Watch the logs.

    make logs

# Launch without Docker

1.  Make sure **`npm`** and **`node`** are installed and available from the terminal.

2.  Check the `.env` file. If **`DB_HOST=localhost`** string isn't in file, then add it.

3.  Launch the app.

    make build
