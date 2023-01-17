# market-hawk-sentiment
  
<p align="center">
  
  <img src="hawk1.jpg" width="500" height="300">
  
</p>

# Structure tree:

├── CLIENT

│   ├── components

│   ├── pages

│   ├── utils

│   ├── App.tsx

│   ├── index.tsx

│   ├── package.json

│   └── serviceWorker.ts

│   └── tsconfig.json

├── SRC

│   ├── API

│   │   ├── get-sentiment-data.ts

│   │   ├── get-sentiment-summary.ts

│   │   └── index.ts

│   ├── COMMON

│   │   ├── constants.ts

│   │   ├── errors.ts

│   │   ├── interfaces.ts

│   │   └── utils.ts

│   ├── DATA-ACCESS

│   │   ├── dynamodb.ts

│   │   ├── get-sentiment-data.ts

│   │   ├── save-sentiment-data.ts

│   │   └── update-sentiment-summary.ts

│   ├── MICROSERVICES

│   │   ├── analyze-sentiment.ts

│   │   ├── get-sentiment-data.ts

│   │   ├── get-sentiment-summary.ts

│   │   ├── save-sentiment-data.ts

│   │   └── update-sentiment-summary.ts

│   └── server.ts

├── .gitignore

├── docker-compose.yml

├── Dockerfile

├── package.json

├── serverless.yml

└── tsconfig.json



# MarketHawkSentiment description:

Is an app that allows users to get real-time sentiment analysis of the gold, stock, foreign exchange, oil market and cryptocurrency markets. It uses natural language processing to analyze news articles and social media posts and assigns a sentiment score to each market. The app also provides a summary of the overall sentiment for each market and allows users to view the sentiment over time through a graphical interface. The app is designed to be easily scalable and can be deployed on any cloud platform. It is built using:

-Node.js.

-TypeScript.

-Micro services.

-AWS Lambda.

-AWS API Gateway.

-Docker.

-CI/CD delivery pipelines.

-Serverless framework.

-DynamoDB.
