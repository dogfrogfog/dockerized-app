FROM node:18-alpine

WORKDIR /d-app

# add node_modules/.bin to ENV so we can use node_modules commands in docker CMD command
ENV PATH ./node_modules/.bin:$PATH

# add explicit package.json/package-lock.json to cache layer
# prevent node_modules redownloading (optimization)
# строка 1
COPY package*.json .
# строка 2
RUN npm ci
# todo: разобраться с нод модулями как что качается как обрабатывается,
# почему image с "строка 1" и "строка 2" весит в 2 раза больше (node_modules качается 2 раза?)
COPY . .
RUN npm run build 
CMD ["npm", "start"]