## Dockerfile

FROM node:16-alpine

WORKDIR /usr/front-bookhub/app

COPY . .

EXPOSE 8085
EXPOSE 8085

## docker compose

version: '3.7'

services:
front-bookhub:
build: .
entrypoint: sh ./.docker/entrypoint.sh
container_name: front-bookhub
volumes:

- .:/usr/front-bookhub/app
  working_dir: /usr/front-bookhub/app
  ports:
- 8085:8085
  restart: always
  tty: true
  environment:
- CHOKIDAR_USEPOLLING=true
