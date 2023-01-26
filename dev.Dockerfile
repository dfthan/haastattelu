FROM node:18.13

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD npm run dev