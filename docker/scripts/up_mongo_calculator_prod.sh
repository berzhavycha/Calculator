export DATABASE=mongoDB

docker-compose -f ../docker-compose-prod.yml up --build -d client server mongo
