# market-hawk-sentiment

# Structure tree:

├── SRC

│ ├── API

│ │ ├── get-sentiment-data.ts

│ │ ├── get-sentiment-summary.ts

│ │ └── index.ts

│ ├── CLIENT

│ │ ├── components

│ │ ├── pages

│ │ ├── utils

│ │ ├── App.tsx

│ │ ├── index.tsx

│ │ └── serviceWorker.ts

│ ├── COMMON

│ │ ├── constants.ts

│ │ ├── errors.ts

│ │ ├── interfaces.ts

│ │ └── utils.ts

│ ├── DATA-ACCESS

│ │ ├── dynamodb.ts

│ │ ├── get-sentiment-data.ts

│ │ ├── save-sentiment-data.ts

│ │ └── update-sentiment-summary.ts

│ ├── MICROSERVICES

│ │ ├── analyze-sentiment.ts

│ │ ├── get-sentiment-data.ts

│ │ ├── get-sentiment-summary.ts

│ │ ├── save-sentiment-data.ts

│ │ └── update-sentiment-summary.ts

│ └── server.ts

├── .gitignore

├── docker-compose.yml

├── Dockerfile

├── package.json

├── serverless.yml

└── tsconfig.json


# MarketHawkSentiment 

is an app that allows users to get real-time sentiment analysis of the gold, stock, foreign exchange, and cryptocurrency markets. It uses natural language processing to analyze news articles and social media posts and assigns a sentiment score to each market. The app also provides a summary of the overall sentiment for each market and allows users to view the sentiment over time through a graphical interface. The app is designed to be easily scalable and can be deployed on any cloud platform. It is built using:

-Node.js.

-TypeScript.

-Micro services.

-AWS Lambda.

-AWS API Gateway.

-Docker.

-CI/CD delivery pipelines in place.
