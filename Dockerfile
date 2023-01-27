FROM node:18.13 as base

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

USER node

FROM base as test
CMD npm test

FROM base as dev
CMD npm run dev

FROM base as prod
CMD npm start