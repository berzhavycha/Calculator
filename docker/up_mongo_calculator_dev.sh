export DATABASE=mongoDB

docker-compose -f ../docker-compose-dev.yml up --build -d client server mongo 
