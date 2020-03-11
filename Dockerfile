#FROM nginx:1.17.1-alpine
#COPY /dist/inventory-management /usr/share/nginx/html
#FROM node:latest as build-step
#WORKDIR /app
#COPY package.json ./
#COPY npm install
#COPY . .
#RUN npm run build
#
#FROM nginx:1.16.0-alpine as prod-stage
#COPY --from=build-step /app/dist/inventory-management /usr/share/nginx/html
#EXPOSE 88
#CMD["nginx", "-g", "daemon off;"]
FROM nginx:stable-alpine
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/inventory-management/ .
