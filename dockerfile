FROM node:18.12.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]