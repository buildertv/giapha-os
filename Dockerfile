FROM node:20-alpine

WORKDIR /app

# copy package trước để cache
COPY package*.json ./

RUN npm install

# copy source
COPY . .

# build nextjs
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]