FROM node:18-alpine AS builder

WORKDIR /d-server

ENV PATH ./node_modules/.bin:$PATH

COPY package*.json .
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
