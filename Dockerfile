FROM node:18-alpine

WORKDIR /home/testtec/api 

COPY package*.json .

RUN npm install

EXPOSE 3000
