FROM node:16-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY . .

FROM base AS development
RUN npm install
EXPOSE 4000
CMD ["npm", "run", "dev"]

FROM base AS production
RUN npm ci
RUN npm run build
EXPOSE 4000
CMD ["node", "dist/index.js"]
