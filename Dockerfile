FROM node:alpine as build-stage
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
# CMD ['npm',"run","bulid"] 
FROM nginx:latest
COPY --from=build-stage /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]