# Harket v1.0.0

<div style="max-width: 600px; margin: 0 auto;">
 <p align="center"> 
 <img src="harket.png" width="500" height="400" alt="Image">
</p>
</div>


# Project Description:


Harket is an market thermometer designed to provide real-time market sentiment analysis.
Leveraging technologies and natural language processing (NLP), Harket analyzes a variety of data sources to deliver valuable insights into prevailing trends and sentiments in the financial markets.

## **Key Features:**

**Real-Time Analysis:** 
Continuously collects and processes data, offering an up-to-date view of market sentiment.

**Diverse Data Sources:** 
Analyzes data from multiple sources, including financial news and social media posts, for a comprehensive perspective.

**Technical Stack**
**Node.js and TypeScript:** 
The backend is built on Node.js, using TypeScript for robust and maintainable development.

**AWS S3:** 
Used for efficient data storage, ensuring scalability and accessibility.

**AWS Lambda and Serverless Framework:** 
Lambda functions process S3 events, performing pre-processing tasks and preparing data for NLP analysis.

**Amazon DynamoDB:** 
Stores the results of the NLP analysis, providing fast and efficient access to processed data.

**Kafka:** 
Manages the transmission of messages between services, facilitating an efficient and decoupled data flow.

**Express.js:** 
Used in microservices to handle HTTP requests and provide an administrative interface.

**Natural Language Processing (NLP):** 
Implemented to analyze and extract sentiment from collected data, using advanced NLP libraries.

**AWS API Gateway:** 
Serves as the frontend's interface for requests, routing them to the appropriate services and functions.

**Docker and Kubernetes:** 
Containerization and orchestration of microservices, ensuring efficient deployment and scalability.

**Usage:**
Harket is ideal for investors, financial analysts, and market enthusiasts seeking an in-depth and up-to-date understanding of market trends based on complex and varied data analysis.



# Installation instructions:

## Check at the code documentation here to see the whole setup:

<p>
  <a href="https://docs.google.com/document/d/1P5Jr75Lh9GwUGBcNXzLMkd4PS7kgKRSO8R62q6oxZaE" target="_blank">
   Link to code documentation
  </a>
</p>