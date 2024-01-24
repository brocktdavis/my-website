# syntax=docker/dockerfile:1

FROM node:20
WORKDIR /reactjs
COPY ./package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]
