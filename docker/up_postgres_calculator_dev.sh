export DATABASE=postgreSQL

docker-compose -f ../docker-compose-dev.yml up --build -d client server postgres
