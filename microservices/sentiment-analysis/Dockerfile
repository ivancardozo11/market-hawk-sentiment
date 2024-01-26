FROM node:16-alpine as builder

WORKDIR /usr/src/app

COPY sentiment-analysis/package*.json ./
RUN npm install

COPY sentiment-analysis/src ./src
COPY sentiment-analysis/tsconfig.json ./

RUN npm run build

FROM node:16-alpine

WORKDIR /usr/app

COPY --from=builder /usr/src/app/dist ./dist
COPY sentiment-analysis/package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/index.js"]
