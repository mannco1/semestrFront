# Use the official Node.js image.
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install 

RUN npm install react-scripts

# Copy the rest of the application files

COPY . .

# Build the application
RUN npm run build 

# Serve the application using serve
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 3000
