FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build -- --configuration production
FROM nginx:latest
COPY --from=build /app/dist/website/browser /usr/share/nginx/html
EXPOSE 80