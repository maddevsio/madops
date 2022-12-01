FROM node:16.3.0-slim

WORKDIR /home/node/app
RUN chown -R node:node /home/node/app

COPY package*.json ./
RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 5000
USER node

CMD [ "node", "server.js" ]
