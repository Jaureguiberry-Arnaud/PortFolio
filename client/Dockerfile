FROM node:16-alpine3.15
WORKDIR /portfolio_front
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "build"]