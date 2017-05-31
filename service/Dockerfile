FROM node:6
RUN mkdir -p /usr/src/express
WORKDIR /usr/src/express
COPY package.json /usr/src/express
RUN npm install
COPY . /usr/src/express
EXPOSE 3000
CMD ["npm", "start"]