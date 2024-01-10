FROM node:latest
COPY . /app
WORKDIR /app
RUN npm c
EXPOSE 3000
CMD ["npm", "run", "start"]