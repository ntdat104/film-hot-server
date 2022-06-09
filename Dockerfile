FROM node:17-alpine AS Builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=Builder /app/dist ./dist
CMD ["node", "dist/main"]