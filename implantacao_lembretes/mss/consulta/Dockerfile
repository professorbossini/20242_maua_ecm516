FROM node:22

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#entrypoint, só executa quando for executar um novo container
CMD ["npm", "start"]