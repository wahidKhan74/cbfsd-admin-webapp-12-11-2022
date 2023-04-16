FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install  --force
COPY ./ /app
RUN npm run build -- --output-path=./dist/out
