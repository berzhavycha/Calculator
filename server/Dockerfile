FROM node:16-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

FROM node:16-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 4000
RUN npm run build
CMD ["node", "dist/index.js"]
