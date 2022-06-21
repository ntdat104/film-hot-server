FROM node:17-alpine AS Builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY --from=Builder /app/dist ./dist
CMD ["node", "dist/main"]