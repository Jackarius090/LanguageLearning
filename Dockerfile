# Build stage for client
FROM node:18-alpine as client-builder
WORKDIR /app/client
COPY LLClient/package*.json ./
RUN npm install
COPY LLClient/ .
RUN npm run build

# Build stage for server
FROM node:18-alpine
WORKDIR /app
COPY LLServer/package*.json ./
RUN npm install --production
COPY LLServer/ .
COPY --from=client-builder /app/client/dist ./dist

EXPOSE 8080 
CMD ["npm", "start"]