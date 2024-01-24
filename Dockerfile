# syntax=docker/dockerfile:1

# Stage 1: Build the frontend
FROM node:20 as frontend-builder
WORKDIR /reactjs
COPY reactjs/package*.json ./
RUN npm install
COPY reactjs/ .

CMD [ "npm", "start" ]
