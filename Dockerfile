FROM node:18

MAINTAINER keith.dh@hotmail.com

EXPOSE 3000

WORKDIR /home/node/app

COPY ./ /home/node/app

RUN npm config set registry http://registry.npm.taobao.org

RUN corepack enable
RUN npm install
RUN npm run build

CMD npm run start
