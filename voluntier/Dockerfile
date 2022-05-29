FROM node:14

WORKDIR /voluntier/
COPY . /voluntier/

RUN yarn install
RUN yarn build:ssr
CMD yarn start
