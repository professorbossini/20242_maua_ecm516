#comentários num Dockerfile

FROM node:22

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5201

CMD ["node", "index.js"]

