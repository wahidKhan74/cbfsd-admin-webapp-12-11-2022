FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app
RUN npm run build -- --output-path=./dist/out
