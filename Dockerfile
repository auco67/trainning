FROM node:20-bookworm-slim
WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install
COPY .* ./
RUN npm run format
