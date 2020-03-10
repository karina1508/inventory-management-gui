FROM nginx:1.17.1-alpine
COPY /dist/inventory-management /usr/share/nginx/html
