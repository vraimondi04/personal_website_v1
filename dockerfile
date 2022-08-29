FROM node:latest

WORKDIR /usr/app

ADD ./ ./

RUN npm i && npm run build && npm prune --production

ENV PORT 8080

ENV NODE_ENV "production"

EXPOSE 8080

CMD ["npm", "start"]