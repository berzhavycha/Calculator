export DATABASE=postgreSQL

docker-compose -f ../docker-compose-prod.yml up --build -d client server postgres
