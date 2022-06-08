FROM node:18-alpine AS builder

WORKDIR /d-app

# add node_modules/.bin to ENV so we can use node_modules commands in docker CMD command if needed
ENV PATH ./node_modules/.bin:$PATH

# add explicit package.json/package-lock.json to cache layer
# prevent node_modules redownloading (optimization)
COPY package*.json .
RUN npm ci

COPY . .

# RUN npm run build

# to give server acces to 8080 port of the container
EXPOSE 8080

CMD ["npm", "start"]

# multistage build to serve static (420mb vs 24mb)

# FROM nginx:alpine

# COPY --from=builder /d-app/build /usr/share/nginx/html
