FROM node:18-alpine

WORKDIR /d-app

# add node_modules/.bin to ENV so we can use node_modules commands in docker CMD command if needed
ENV PATH ./node_modules/.bin:$PATH

# add explicit package.json/package-lock.json to cache layer
# prevent node_modules redownloading (optimization)
COPY package*.json .
RUN npm ci

COPY . .

# RUN npm run build

CMD ["npm", "start"]