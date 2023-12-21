FROM node:16-alpine as development
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN mkdir -p node_modules/.vite/ && chmod -R 777 node_modules/.vite/
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM node:16-alpine as production
WORKDIR /app
COPY . /app
COPY .env /app/.env
RUN npm ci 
RUN npm run build

FROM nginx:1.23.1-alpine as nginx
EXPOSE 80
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=production /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
