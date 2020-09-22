# At the time of writing, this is evaluated from lts-alpine
FROM node:12.18.4-alpine3.11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY app/package.json /usr/src/app/package.json
RUN npm install --silent

COPY app /usr/src/app
CMD ["npm", "start"]
