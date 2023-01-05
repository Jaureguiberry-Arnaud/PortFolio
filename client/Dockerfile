FROM node:16-alpine3.15
WORKDIR /client
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 4173
CMD ["npm", "run", "build"] 
