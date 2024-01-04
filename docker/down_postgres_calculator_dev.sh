export DATABASE=postgres

docker-compose -f ../docker-compose-dev.yml down client server postgres
