FROM node:20.11.1

COPY . ./server

WORKDIR /server

RUN rm -rf node_modules
RUN rm -rf dist

RUN npm install

RUN npm run build

CMD [ "./dist/soma.js" ]