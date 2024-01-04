FROM node:16-alpine as development
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN mkdir -p node_modules/.vite/ && chmod -R 777 node_modules/.vite/
COPY . /app
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . /app
RUN npm run build

FROM nginx:1.23.1-alpine as production
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
