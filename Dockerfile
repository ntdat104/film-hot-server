FROM node:17-alpine AS Builder
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY --from=Builder /app/dist ./dist
CMD ["node", "dist/main"]