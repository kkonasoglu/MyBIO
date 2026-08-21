# Use lightweight Node Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package dependencies and install them
COPY package*.json ./
RUN npm install --production

# Copy all project files
COPY . .

# Expose port 80
EXPOSE 80

# Start Express server
CMD ["node", "server.js"]
