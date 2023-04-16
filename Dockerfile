FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --lagacy-peer-deps
COPY ./ /app
RUN npm run build -- --output-path=./dist/out
