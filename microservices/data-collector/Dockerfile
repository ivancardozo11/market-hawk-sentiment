FROM node:16-alpine as builder

WORKDIR /usr/src/app

COPY data-collector/package*.json ./
RUN npm install

COPY data-collector/src ./src
COPY data-collector/tsconfig.json ./

RUN npm run build

FROM node:16-alpine

WORKDIR /usr/app

COPY --from=builder /usr/src/app/dist ./dist
COPY data-collector/package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/index.js"]
