FROM node:latest

COPY package*.json ./

RUN npm install
# Copy the rest of the app's source code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the ports the app and the database will run on
EXPOSE 8080

# Run the app
CMD ["npm", "run", "start:dev"]