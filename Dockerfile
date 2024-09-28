FROM node:20.11.1

RUN groupadd groupnonroot

RUN useradd -m -g groupnonroot nonroot

USER nonroot

WORKDIR /home/nonroot/server
RUN mkdir -p /home/nonroot/server

COPY ./.github ./.github
COPY ./.scannerwork ./.scannerwork
COPY ./.gitignore .
COPY ./src ./src
COPY ./babel.config.js .
COPY ./package.json .
COPY ./tsconfig.json .

RUN chmod u=rwX,g=rx,o=rx /home/nonroot/server

RUN rm -rf node_modules
RUN rm -rf dist

RUN npm install

RUN npm run build

CMD [ "./dist/soma.js" ]