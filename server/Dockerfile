# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install necessary build tools
RUN apk add --no-cache make gcc g++ python3

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "start"]
